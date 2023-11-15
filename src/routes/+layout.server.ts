import { env } from '$env/dynamic/private';
import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async () => {
  return {
    analyticsId: env.VERCEL_ANALYTICS_ID
  };
};

export const prerender = true;
