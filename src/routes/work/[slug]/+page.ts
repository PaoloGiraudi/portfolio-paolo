import type { LoadEvent } from '@sveltejs/kit';

export async function load({ params }: LoadEvent) {
  const project = await import(`../projects/${params.slug}.md`);
  const { title } = project.metadata;
  const Content = project.default;

  return {
    Content,
    title,
    // src: `/src/lib/assets/${params.slug}.png`,
    caption: null
  };
}
