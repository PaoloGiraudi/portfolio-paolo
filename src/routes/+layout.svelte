<script>
  import '../styles/variables.css';
  import '../styles/reset.css';
  import '../styles/global.css';
  import Navbar from '$lib/components/navbar.svelte';
  import Portrait from '$lib/components/portrait.svelte';
  import { onMount } from 'svelte';
  import Cursor from '$lib/components/cursor.svelte';
  import { onMouseMove } from '$lib/utils/mouse-handlers';

  onMount(() => {
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    document.body.addEventListener('mousemove', onMouseMove);
  });
</script>

<Cursor />
<Navbar />
<main>
  <slot />
</main>
<Portrait />

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
