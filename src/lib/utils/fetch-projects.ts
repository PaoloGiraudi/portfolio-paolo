import type { Project } from '$lib/types';

export const fetchProjects = async () => {
  const allProjects: Record<string, () => Promise<any>> = import.meta.glob(
    '/src/routes/work/projects/*.md'
  );
  const iterableProjects = Object.entries(allProjects);

  const projects = await Promise.all<Project>(
    iterableProjects.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(11, -3);

      return {
        meta: metadata,
        path: postPath
      };
    })
  );

  return projects;
};
