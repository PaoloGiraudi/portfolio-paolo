import { db } from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  // const projects = await db.query.projects.findMany({
  //   columns: {
  //     id: true,
  //     name: true,
  //     description: true,
  //     url: true
  //   },
  //   orderBy: (projects, { desc }) => [desc(projects.id)]
  // });
  return {
    projects: []
  };
};
