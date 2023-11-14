import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors

  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        "connect-src": ["self", "vitals.vercel-insights.com"]
      },
      reportOnly: {
        'report-to': ["vitals.vercel-insights.com"]
      }
    },
  },
};

export default config;
