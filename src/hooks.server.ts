export const handle = async ({ event, resolve }) => {
  const theme = event.cookies.get('theme') ?? 'auto';

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%THEME%', theme)
  });

  return response;
};
