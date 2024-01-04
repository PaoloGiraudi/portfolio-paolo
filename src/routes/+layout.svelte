<script lang="ts">
  import { onMouseMove } from '$lib/utils/on-mouse-move';
  import { installTwicpics } from '@twicpics/components/sveltekit';
  import { onMount } from 'svelte';
  import { Cursor, Footer, Portrait, ThemeToggle } from '$lib/components';
  import { theme, type Theme } from '$lib/stores/theme';
  import '@fontsource-variable/eb-garamond/wght.css';
  import 'open-props/fonts.min.css';
  import 'open-props/gray-oklch.min.css';
  import 'open-props/borders.min.css';
  import 'open-props/sizes.min.css';
  import '../styles/reset.css';
  import '../styles/themes.css';
  import '../styles/app.css';

  let screenWidth: number;

  onMount(() => {
    theme.set((document.documentElement.dataset.theme as Theme) || 'light');
  });

  installTwicpics({
    domain: 'https://paolo.twic.pics'
  });
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
  <ThemeToggle />
  <Portrait />
  <!-- <Footer /> -->
  <!-- <div class="scroll-container">
    <slot />
  </div> -->
</main>

<style>
  main {
    direction: rtl;
    padding: var(--mobile-border);
    height: 100svh;
    width: 100vw;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background-color: var(--surface-1);
    scroll-snap-type: x mandatory;
    overflow-x: auto;
  }
  .scroll-container {
    position: relative;
    scroll-snap-align: start end;
    width: 180vw;
  }

  @media (min-width: 50rem) {
    main {
      direction: ltr;
      display: flex;
      align-items: center;
      padding: var(--desktop-border);
    }
  }
</style>
