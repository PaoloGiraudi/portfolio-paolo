import { env } from '$env/dynamic/private';
import paolo from '$lib/assets/paolo.avif';
import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async ({ url, locals }) => {
  return {
    analyticsId: env.VERCEL_ANALYTICS_ID,
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
