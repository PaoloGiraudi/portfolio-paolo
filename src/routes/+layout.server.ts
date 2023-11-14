import paolo from '$lib/assets/paolo.avif';
import type { LayoutServerLoad } from './$types.js';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
  runtime: 'edge'
};

export const load: LayoutServerLoad = async ({ url, locals }) => {
  return {
    pathname: url.pathname,
    src: paolo,
    alt: "Paolo's portrait",
    caption: {
      text: 'Cover art by',
      link: {
        text: 'Greta',
        href: 'https://www.g-studio.design/'
      }
    },
    cursor: 'shrink',
    theme: locals.theme
  };
};
