<script lang="ts">
  import { onMouseMove } from '$lib/utils/on-mouse-move';
  import { onMount } from 'svelte';
  import { Cursor, Window, ThemeToggle } from '$lib/components';
  import { theme, type Theme } from '$lib/stores/theme';
  import MetaTitle from '$lib/components/meta-title.svelte';
  import 'open-props/fonts.min.css';
  import 'open-props/gray-oklch.min.css';
  import 'open-props/borders.min.css';
  import 'open-props/sizes.min.css';
  import '../styles/fonts.css';
  import '../styles/reset.css';
  import '../styles/themes.css';
  import '../styles/app.css';

  let screenWidth: number;

  onMount(() => {
    theme.set((document.documentElement.dataset.theme as Theme) || 'light');
  });
</script>

<svelte:window
  on:mousemove={screenWidth > 800 ? onMouseMove : null}
  bind:innerWidth={screenWidth}
/>
<MetaTitle title="Official website" />

{#if screenWidth > 800}
  <Cursor />
{/if}
<main>
  <Window />
  <ThemeToggle />
  <slot />
</main>

<style>
  main {
    padding: var(--mobile-border);
    height: 100dvh;
    position: relative;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas: 'portrait' 'slot';
    background-color: var(--surface-1);
  }

  @media (min-width: 50rem) {
    main {
      display: flex;
      align-items: center;
      padding: var(--desktop-border);
    }
  }
</style>
