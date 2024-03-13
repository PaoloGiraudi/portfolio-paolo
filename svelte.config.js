import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { getHighlighter } from 'shiki/bundle/full';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await getHighlighter({
        themes: ['rose-pine-dawn', 'rose-pine-moon'],
        langs: ['js', 'ts', 'css', 'go']
      });
      const html = escapeSvelte(
        highlighter.codeToHtml(code, {
          lang,
          themes: {
            light: 'rose-pine-dawn',
            dark: 'rose-pine-moon'
          },
        })
      );
      return `{@html \`${html}\` }`;
    }
  }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  extensions: ['.md', '.svelte'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter({
      precompress: true
    })
  }
};

export default config;
