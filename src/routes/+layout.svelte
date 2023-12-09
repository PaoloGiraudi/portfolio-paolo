<script lang="ts">
  import { onMouseMove } from '$lib/utils/on-mouse-move';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { Cursor, LoadingOverlay, Window, ThemeToggle } from '$lib/components';
  import type { LayoutData } from './$types';
  import { webVitals } from '$lib/utils/vitals';
  import { page } from '$app/stores';
  import { theme, type Theme } from '$lib/stores/theme';
  import MetaTitle from '$lib/components/meta-title.svelte';

  export let data: LayoutData;

  let loading = true;
  let screenWidth: number;

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

<svelte:window on:mousemove={onMouseMove} bind:innerWidth={screenWidth} />
<MetaTitle title="Official website" />

{#if screenWidth > 800}
  <Cursor />
{/if}
<LoadingOverlay {loading}>
  <main>
    <Window />
    <ThemeToggle />
    <slot />
  </main>
</LoadingOverlay>

<style>
  @import 'open-props/fonts.min.css';
  @import 'open-props/gray-oklch.min.css';
  @import 'open-props/easings.min.css';
  @import 'open-props/borders.min.css';
  @import 'open-props/sizes.min.css';
  @import '../styles/fonts.css';
  @import '../styles/reset.css';
  @import '../styles/themes.css';
  @import '../styles/app.css';

  main {
    padding: var(--mobile-border);
    height: 100dvh;
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
