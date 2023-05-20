<script lang="ts">
  import '../styles/variables.css';
  import '../styles/reset.css';
  import '../styles/global.css';
  import { onMouseMove } from '$lib/utils/on-mouse-move';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import {
    Cursor,
    LoadingOverlay,
    Navbar,
    PageTransition,
    Portrait
  } from '$lib/components';
  export let data;
  let loading = true;

  onMount(() => {
    loading = !browser;
  });
</script>

<svelte:window on:mousemove={onMouseMove} />

<LoadingOverlay {loading}>
  <Cursor />
  <Navbar />
  <Portrait />
  {#key data.pathname}
    <PageTransition>
      <slot />
    </PageTransition>
  {/key}
</LoadingOverlay>

<style>
  :global() {
    --main-font: 'Cormorant Garamond', Georgia, serif;
    --secondary-font: 'Raleway', Arial, sans-serif;
  }
</style>
