<script lang="ts">
  import { page } from '$app/stores';
  import { routes } from '$lib/routes';
  import { menu } from '$lib/stores/menu';
  import { isLast } from '$lib/utils/is-last';
  import { slide } from 'svelte/transition';
  import ThemeToggle from './theme-toggle.svelte';

  $: path = $page.route.id;
</script>

{#if $menu}
  <nav transition:slide={{ axis: 'x' }}>
    {#each routes as route}
      <a
        data-cursor="shrink"
        href={route.href}
        class:active={path === `${route.href}/[slug]` || path === route.href}
        data-sveltekit-preload-data="hover"
      >
        {route.name}
      </a>
      {#if !isLast(routes, route)}
        <p>|</p>
      {/if}
    {/each}
    <ThemeToggle />
  </nav>
{/if}

<style>
  nav {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--size-4);
    background-color: var(--surface-1);
    z-index: 20;
  }
  p {
    display: none;
  }

  a {
    font-family: var(--font-serif);
    font-size: var(--font-size-7);
    text-decoration: none;
  }

  a.active {
    text-decoration-line: underline;
    text-decoration-thickness: var(--border-size-3);
    text-decoration-color: var(--accent-2);
    text-underline-offset: var(--size-1);
  }

  @media (min-width: 62rem) {
    nav {
      justify-content: flex-end;
      flex-direction: row;
      padding-inline-end: var(--size-3);
      grid-area: navbar;
      position: sticky;
    }

    p {
      display: block;
    }

    a {
      font-size: var(--font-size-4);
    }

    a.active {
      text-decoration-thickness: var(--border-size-2);
    }
  }
</style>
