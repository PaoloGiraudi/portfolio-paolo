<script lang="ts">
  import { page } from '$app/stores';
  import { routes } from '$lib/routes';
  import { menu } from '$lib/stores/menu';
  import { isLast } from '$lib/utils/is-last';
  import { slide } from 'svelte/transition';
  import ThemeToggle from './theme-toggle.svelte';
</script>

{#if $menu}
  <nav transition:slide={{ axis: 'x' }}>
    {#each routes as route}
      {@const active = $page.url.pathname === route.href ? 'page' : null}
      <a
        data-cursor="shrink"
        href={route.href}
        aria-current={active}
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
    position: relative;
  }

  a[aria-current='page']::before {
    content: '';
    position: absolute;
    bottom: var(--size-1);
    height: var(--border-size-3);
    width: 100%;
    background-color: var(--accent-2);
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

    a[aria-current='page']::before {
      height: var(--border-size-2);
      view-transition-name: active-page;
    }
  }
</style>
