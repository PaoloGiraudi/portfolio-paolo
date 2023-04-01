import { fetchProjects } from '$lib/utils/fetch-projects';
import { json } from '@sveltejs/kit';

// export const prerender = true;

export const GET = async () => {
  const projects = await fetchProjects();

  return json(projects);
};
