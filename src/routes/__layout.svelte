<script>
  import Portrait from '$lib/components/portrait.svelte';
  import '../styles/variables.css';
  import '../styles/reset.css';
  import '../styles/global.css';
</script>

<main>
  <Portrait />
  <slot />
</main>

<style>
  main {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem;
    background-color: var(--color-bg);
  }
</style>
