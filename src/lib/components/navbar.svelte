<script lang="ts">
  import { page } from '$app/stores';
  import { routes } from '$lib/routes';
  import { isLast } from '$lib/utils/is-last';

  $: path = $page.route.id;
</script>

<nav>
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
</nav>

<style>
  nav {
    grid-area: navbar;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--size-4);
    background-color: var(--surface-1);
    position: sticky;
    z-index: 20;
  }
  a {
    font-family: var(--font-serif);
    font-size: var(--font-size-4);
    text-decoration: none;
  }

  a.active {
    text-decoration-line: underline;
    text-decoration-thickness: var(--border-size-2);
    text-decoration-color: var(--accent-2);
    text-underline-offset: var(--size-1);
  }

  @media (min-width: 62rem) {
    nav {
      justify-content: flex-end;
      padding-inline-end: var(--size-6);
    }
  }
</style>
