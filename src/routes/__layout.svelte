<script>
  import '../styles/variables.css';
  import '../styles/reset.css';
  import '../styles/global.css';
  import Navbar from '$lib/components/navbar.svelte';
  import Portrait from '$lib/components/portrait.svelte';
</script>

<div>
  <Navbar />
  <main>
    <slot />
  </main>
  <Portrait />
</div>

<style>
  div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: var(--navbar-height) auto;
    grid-template-areas:
      'navbar'
      'slot';
    margin: var(--mobile-border);
    background-color: var(--color-bg);
  }
  main {
    margin-bottom: var(--navbar-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
  }

  @media (min-width: 62rem) {
    div {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'portrait navbar'
        'portrait slot';
      margin: var(--desktop-border);
    }
  }
</style>
