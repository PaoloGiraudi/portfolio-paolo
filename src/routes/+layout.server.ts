import { env } from '$env/dynamic/private';
import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async ({ locals }) => {
  return {
    analyticsId: env.VERCEL_ANALYTICS_ID,
    theme: locals.theme
  };
};
