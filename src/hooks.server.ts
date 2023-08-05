import { isValidTheme } from '$lib/stores/theme';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const theme = event.cookies.get('theme') ?? 'auto';

  if (isValidTheme(theme)) {
    event.locals.theme = theme;
  }

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%THEME%', theme)
  });

  return response;
};
