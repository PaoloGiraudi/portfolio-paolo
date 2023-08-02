<script lang="ts">
  import { menu } from '$lib/stores/menu';
</script>

<button on:click={() => menu.set(!$menu)}>
  {#if $menu}
    <svg fill="none" height="48" width="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  {:else}
    <svg fill="none" height="48" width="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="square" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  {/if}
</button>

<style>
  button {
    border: none;
    display: grid;
    place-items: center;
    background-color: transparent;
    position: absolute;
    top: var(--size-4);
    left: var(--size-4);
    z-index: 30;
  }

  path {
    stroke: var(--text-2);
  }

  @media (min-width: 640px) {
    button {
      display: none;
    }
  }
</style>
