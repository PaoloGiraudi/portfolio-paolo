<script lang="ts">
  import { page } from '$app/stores';
  import { routes } from '$lib/routes';
  import { isLast } from '$lib/is-last';
  let path: String;
  $: path = $page.url.pathname;
</script>

<nav class="flow-h">
  {#each routes as route}
    <a href={route.href} class:active={path == route.href} sveltekit:prefetch>
      {route.name}
    </a>
    {#if !isLast(routes, route)}
      <p>|</p>
    {/if}
  {/each}
</nav>

<style>
  nav {
    --flow-spacing: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--flow-spacing);
    background-color: var(--color-bg);
    position: sticky;
    top: var(--mobile-border);
  }
  a {
    font-family: var(--secondary-font);
    padding: 0.125rem 0.625rem;
    font-size: var(--font-sm);
    text-decoration: none;
  }

  a:hover,
  a:focus {
    background-color: var(--color-dark-alpha);
  }

  a.active {
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-decoration-color: var(--color-accent-light);
  }

  @media (min-width: 62rem) {
    nav {
      justify-content: flex-end;
      top: var(--desktop-border);
    }
  }
</style>
