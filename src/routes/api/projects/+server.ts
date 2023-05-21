import { json } from '@sveltejs/kit';
import type { Project } from '$lib/types';

const getProjects = async () => {
  const projects: Project[] = [];

  const paths = import.meta.glob('/src/routes/work/projects/*.md', {
    eager: true
  });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Project, 'slug'>;
      const post = { ...metadata, slug } satisfies Project;
      projects.push(post);
    }
  }

  return projects;
};

export const GET = async () => {
  const projects = await getProjects();

  return json(projects);
};
