import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  build: {
    minify: true,
    cssMinify: true
  },
  plugins: [sveltekit()],
  ssr: {
    noExternal: ['style-object-to-css-string']
  },
  appType: 'custom'
};

export default config;
