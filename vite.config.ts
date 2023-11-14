import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [sveltekit()],
  ssr: {
    noExternal: ['style-object-to-css-string']
  }
};

export default config;
