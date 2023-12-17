<script lang="ts">
  import { onMouseMove } from '$lib/utils/on-mouse-move';
  import { onMount } from 'svelte';
  import { Cursor, Window, ThemeToggle } from '$lib/components';
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
  <Window />
  <ThemeToggle />
  <slot />
</main>

<style>
  main {
    padding: var(--mobile-border);
    height: 100svh;
    position: relative;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas: 'portrait' 'slot';
    background-color: var(--surface-1);
  }

  @media (min-width: 50rem) {
    main {
      display: flex;
      align-items: center;
      padding: var(--desktop-border);
    }
  }
</style>
