<script lang="ts">
  import '../styles/variables.css';
  import '../styles/reset.css';
  import '../styles/global.css';
  import Navbar from '$lib/components/navbar.svelte';
  import Portrait from '$lib/components/portrait.svelte';
  import Cursor from '$lib/components/cursor.svelte';
  import LoadingOverlay from '$lib/components/loading-overlay/overlay.svelte';
  import { onMouseMove } from '$lib/utils/on-mouse-move';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import PageTransition from '$lib/components/page-transition.svelte';
  import { onResize } from '$lib/utils/on-resize';
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
