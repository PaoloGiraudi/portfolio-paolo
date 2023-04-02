import type { Project } from '$lib/types';
import type { Load, LoadEvent } from '@sveltejs/kit';

export const load: Load = async ({ fetch }: LoadEvent) => {
  const response = await fetch(`/api/projects`);
  const projects: Project[] = await response.json();

  return {
    projects
  };
};
