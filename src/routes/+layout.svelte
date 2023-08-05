<script lang="ts">
  import '../styles/themes.css';
  import '../styles/reset.css';
  import '../styles/app.css';
  import { onMouseMove } from '$lib/utils/on-mouse-move';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { Cursor, LoadingOverlay, Navbar, Window, Menu } from '$lib/components';
  import { navigating } from '$app/stores';
  import { menu } from '$lib/stores/menu';
  import type { LayoutData } from './$types';
  import { theme } from '$lib/stores/theme';

  let loading = true;
  let isDesktop: boolean;
  export let data: LayoutData;

  $theme = data.theme;
  $: !isDesktop && $navigating && menu.set(false);
  $: browser && (document.documentElement.dataset.theme = $theme);

  onMount(() => {
    loading = !browser;
    isDesktop = window.matchMedia('(min-width: 62rem)').matches;
    isDesktop && menu.set(true);
  });
</script>

<svelte:window on:mousemove={onMouseMove} />

<div id="layout">
  <LoadingOverlay {loading}>
    <Cursor />
    <Menu />
    <Navbar />
    <Window />
    <main>
      <slot />
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
    padding-inline-start: var(--size-4);
    padding-block-start: var(--size-8);
    z-index: 10;
    padding-block-start: 20dvh;
    background: linear-gradient(to top right, var(--surface-1) 75%, transparent 75%);
  }

  @media (min-width: 62rem) {
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: var(--navbar-height) auto;
      grid-template-areas:
        'portrait navbar'
        'portrait slot';
      padding: var(--desktop-border);
    }

    main {
      background: var(--surface-1);
      grid-area: slot;
      padding-block-start: var(--size-10);
      align-items: unset;
      margin-bottom: var(--navbar-height);
    }
  }
</style>
