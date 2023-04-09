<script lang="ts">
  import '../styles/variables.css';
  import '../styles/reset.css';
  import '../styles/global.css';
  import { onMouseMove } from '$lib/utils/on-mouse-move';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { onResize } from '$lib/utils/on-resize';
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
    setTimeout(() => {
      loading = !browser;
    }, 500);
  });
</script>

<svelte:window on:resize={onResize} on:mousemove={onMouseMove} />

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
