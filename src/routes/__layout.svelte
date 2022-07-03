<script>
  import '../styles/variables.css';
  import '../styles/reset.css';
  import '../styles/global.css';
  import Navbar from '$lib/components/navbar.svelte';
  import Portrait from '$lib/components/portrait.svelte';
</script>

<main>
  <Navbar />
  <section>
    <slot />
  </section>
  <Portrait />
</main>

<style>
  main {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: var(--navbar-height) auto;
    grid-template-areas:
      'portrait navbar'
      'portrait slot';
    margin: var(--desktop-border);
    background-color: var(--color-bg);
  }
  section {
    margin-bottom: var(--navbar-height);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>
