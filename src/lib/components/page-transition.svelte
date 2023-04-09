<script>
  import { quintInOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
</script>

<main
  in:fly={{ x: -25, duration: 150, delay: 100, easing: quintInOut }}
  out:fly={{ x: +25, duration: 150, easing: quintInOut }}
>
  <slot />
</main>

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
