<script lang="ts">
  import '../styles/variables.css';
  import '../styles/reset.css';
  import '../styles/global.css';
  import Navbar from '$lib/components/navbar.svelte';
  import Portrait from '$lib/components/portrait.svelte';
  import Cursor from '$lib/components/cursor.svelte';
  import { onMouseMove } from '$lib/utils/on-mouse-move';
  import Loader from '$lib/components/loader.svelte';
  import { quintInOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  export let data;

  const handleResize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
</script>

<svelte:window on:resize={handleResize} on:mousemove={onMouseMove} />

<Loader>
  <Cursor />
  <Navbar />
  <Portrait />
  {#key data.pathname}
    <main
      in:fly={{ x: -25, duration: 150, delay: 100, easing: quintInOut }}
      out:fly={{ x: +25, duration: 150, easing: quintInOut }}
    >
      <slot />
    </main>
  {/key}
</Loader>

<style>
  main {
    margin-bottom: var(--navbar-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
  }

  @media (min-width: 62rem) {
    main {
      align-items: unset;
    }
  }
</style>
