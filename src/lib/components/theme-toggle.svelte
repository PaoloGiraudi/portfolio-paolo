<script lang="ts">
  import { Moon, Sun } from '$lib/icons';
  import { theme, type Theme } from '$lib/stores/theme';

  const setTheme = (newTheme: Theme) => {
    theme.set(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.dataset.theme = newTheme;
  };

  const toggleTheme = (): void => {
    const newTheme: Theme = $theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
</script>

<div>
  <button data-cursor="shrink" aria-label="toggle theme" on:click={toggleTheme}>
    {#if $theme === 'dark'}
      <Sun />
    {:else}
      <Moon />
    {/if}
  </button>
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

  @media (min-width: 62rem) {
    div {
      right: var(--desktop-border);
      top: var(--desktop-border);
    }
  }
</style>
