<script lang="ts">
  import { setTheme, theme } from '$lib/stores/theme';
  import Moon from './moon.svelte';
  import Sun from './sun.svelte';
</script>

<button
  data-cursor="shrink"
  aria-label="Switch theme"
  on:click={() => setTheme($theme === 'light' ? 'dark' : 'light')}
>
  {#if $theme === 'light'}
    <Moon />
  {:else}
    <Sun />
  {/if}
</button>

<style>
  button {
    padding: 0;
    background-color: transparent;
    margin-inline-start: var(--size-2);
    border: none;
    display: grid;
    place-items: center;
    width: var(--size-9);
    height: var(--size-9);
    color: var(--text-1);
  }

  :global(svg) {
    width: var(--font-size-7);
    height: var(--font-size-7);
  }

  @media (min-width: 62rem) {
    button {
      width: var(--size-7);
      height: var(--size-7);
    }
    :global(svg) {
      width: var(--font-size-4);
      height: var(--font-size-4);
    }
  }
</style>
