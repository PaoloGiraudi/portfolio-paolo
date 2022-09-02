import type { Projects } from '$lib/types';
import type { Load, LoadEvent } from '@sveltejs/kit';

export const load: Load = async ({ fetch }: LoadEvent) => {
  const response = await fetch(`/api/projects`);
  const projects: Projects = await response.json();

  return {
    projects
  };
};

export const prerender = true;
