<script lang="ts">
  import { browser } from '$app/environment';
  import { applyAction, enhance } from '$app/forms';
  import { theme, type Theme } from '$lib/stores/theme';
  import Moon from './moon.svelte';
  import Sun from './sun.svelte';

  const prefersDarkMode = browser && window.matchMedia('(prefers-color-scheme: dark)').matches;

  let newTheme: Theme;
  $: newTheme = $theme === 'light' ? 'dark' : 'light';
</script>

<form
  method="POST"
  action="/?/change-theme"
  use:enhance={async () => {
    $theme = newTheme;
    return async ({ result }) => {
      await applyAction(result);
    };
  }}
>
  <input name="theme" value={newTheme} hidden />
  <button data-cursor="shrink" aria-label="Switch theme">
    {#if $theme === 'dark' || ($theme === 'auto' && prefersDarkMode)}
      <Sun />
    {:else}
      <Moon />
    {/if}
  </button>
</form>

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
