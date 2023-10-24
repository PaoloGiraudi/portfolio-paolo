<script lang="ts">
  import { browser } from '$app/environment';
  import { applyAction, enhance } from '$app/forms';
  import { theme, type Theme } from '$lib/stores/theme';
  import { Moon, Sun } from '$lib/icons/';

  const prefersDarkMode = browser && window.matchMedia('(prefers-color-scheme: dark)').matches;

  let newTheme: Theme;
  $: newTheme = $theme === 'light' ? 'dark' : 'light';
</script>

<div>
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
</div>

<style>
  div {
    padding: var(--size-2);
    position: absolute;
    right: var(--mobile-border);
    top: var(--mobile-border);
    z-index: 20;
    aspect-ratio: 1;
  }
  button {
    padding: 0;
    background-color: transparent;
    border: none;
    display: grid;
    place-items: center;
    width: var(--size-7);
    height: var(--size-7);
    color: var(--text-2);
  }

  :global(svg) {
    width: var(--font-size-4);
    height: var(--font-size-4);
  }

  @media (min-width: 62rem) {
    div {
      right: var(--desktop-border);
      top: var(--desktop-border);
    }
  }
</style>
