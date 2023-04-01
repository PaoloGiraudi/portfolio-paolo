export const load = ({ url }: { url: URL }) => {
  const { pathname } = url;

  return {
    pathname
  };
};
export const prerender = true;
