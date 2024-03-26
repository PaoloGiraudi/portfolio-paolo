<script lang="ts">
  import { onMouseMove } from '$lib/utils/on-mouse-move';
  import { onMount } from 'svelte';
  import { Cursor, Portrait, ThemeToggle } from '$lib/components';
  import { theme, type Theme } from '$lib/stores/theme';
  import { installTwicpics } from '@twicpics/components/sveltekit';
  import '@fontsource-variable/eb-garamond/wght.css';
  import '@twicpics/components/style.css';
  import 'open-props/fonts.min.css';
  import 'open-props/gray-oklch.min.css';
  import 'open-props/borders.min.css';
  import 'open-props/sizes.min.css';
  import '../styles/reset.css';
  import '../styles/themes.css';
  import '../styles/app.css';
  import { dev } from '$app/environment';

  let screenWidth: number;

  onMount(() => {
    theme.set((document.documentElement.dataset.theme as Theme) || 'light');
  });

  if (!dev) {
    installTwicpics({
      domain: 'https://paolo.twic.pics',
      path: 'portfolio'
    });
  }
</script>

<svelte:window
  on:mousemove={screenWidth > 800 ? onMouseMove : null}
  bind:innerWidth={screenWidth}
/>

<svelte:head>
  <title>Paolo Giraudi | Official website</title>
  <meta name="description" content="Paolo's personal portfolio, full of unecessary css gimmicks." />
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
</svelte:head>

{#if screenWidth > 800}
  <Cursor />
{/if}
<main>
  <Portrait />
  <ThemeToggle />
  <div class="scroll-container">
    <slot />
  </div>
</main>

<style>
  main {
    --content-height: calc(100svh - var(--border) * 2);
    --content-width: calc(100vw - var(--border) * 2);
    margin: var(--border);
    direction: rtl;
    height: var(--content-height);
    width: var(--content-width);
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    scroll-snap-type: x mandatory;
    background-color: var(--surface-1);
    overflow-x: auto;
    overflow-y: hidden;
  }

  .scroll-container {
    position: relative;
    scroll-snap-align: start end;
    width: 180vw;
  }

  @media (min-width: 50rem) {
    main {
      overflow-x: hidden;
      direction: initial;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .scroll-container {
      display: contents;
    }
  }
</style>
