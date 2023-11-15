<script lang="ts">
  import '../styles/props.css';
  import '../styles/fonts.css';
  import '../styles/reset.css';
  import '../styles/themes.css';
  import '../styles/app.css';
  import { onMouseMove } from '$lib/utils/on-mouse-move';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { Cursor, LoadingOverlay, Window, Footer, ThemeToggle } from '$lib/components';
  import type { LayoutData } from './$types';
  import { webVitals } from '$lib/utils/vitals';
  import { page } from '$app/stores';
  import { theme, type Theme } from '$lib/stores/theme';

  export let data: LayoutData;

  let loading = true;

  $: if (browser && data?.analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId: data.analyticsId
    });
  }

  onMount(() => {
    theme.set((document.documentElement.dataset.theme as Theme) || 'light');
    loading = !browser;
  });
</script>

<svelte:window on:mousemove={onMouseMove} />

<div id="layout">
  <LoadingOverlay {loading}>
    <ThemeToggle />
    <Cursor />
    <Window />
    <main>
      <slot />
      <Footer />
    </main>
  </LoadingOverlay>
</div>

<style>
  div {
    height: 100dvh;
    width: 100dvw;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'portrait'
      'slot';
    padding: var(--mobile-border);
    background-color: var(--surface-1);
    overflow-y: auto;
  }

  main {
    overflow-y: auto;
    grid-area: 1 / 1 / 3 / -1;
    max-inline-size: 100%;
    padding-block-start: var(--size-8);
    z-index: 10;
    padding-block-start: 20dvh;
    background: linear-gradient(to top right, var(--surface-1) 75%, transparent 75%);
  }

  @media (min-width: 62rem) {
    div {
      display: flex;
      padding: var(--desktop-border);
    }

    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: var(--surface-1);
      flex-basis: 50%;
      align-items: unset;
      padding-block-start: 0;
    }
  }
</style>
