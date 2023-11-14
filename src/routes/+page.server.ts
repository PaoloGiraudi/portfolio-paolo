import { isValidTheme } from '$lib/stores/theme';
import { type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/database';

const ONE_YEAR = 60 * 60 * 24 * 365;

export const actions: Actions = {
  'change-theme': async ({ cookies, request }) => {
    const data = await request.formData();
    const theme = data.get('theme');

    if (!isValidTheme(theme)) {
      return fail(400, { theme, missing: true });
    }

    cookies.set('theme', theme, {
      path: '/',
      maxAge: ONE_YEAR,
      sameSite: true
    });
    return { success: true };
  }
};

export const load: PageServerLoad = async () => {
  const projects = await db.query.projects.findMany({
    columns: {
      id: true,
      name: true,
      description: true,
      url: true
    },
    orderBy: (projects, { desc }) => [desc(projects.id)]
  });
  return {
    projects
  };
};
