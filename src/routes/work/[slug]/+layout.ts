import type { LoadEvent } from '@sveltejs/kit';

export async function load({ params }: LoadEvent) {
  const project = await import(`../projects/${params.slug}.md`);

  return {
    Content: project.default,
    metadata: project.metadata,
    // src: `/src/lib/assets/${params.slug}.png`,
    caption: null
  };
}
