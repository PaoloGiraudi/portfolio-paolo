<script lang="ts">
  export let href: string;
  export let target: '__self' | '__blank' = '__self';
</script>

<a {href} {target} sveltekit:prefetch>
  <span>
    <slot />
  </span>
</a>

<style>
  a {
    display: grid;
    place-items: center;
    text-decoration: none;
    font-family: var(--secondary-font);
    color: var(--color-dark);
    background-color: transparent;
    border-width: var(--stoke-sm);
    border-color: var(--color-accent-light);
    border-style: solid;
    padding: 0.25rem 0;
    font-size: var(--font-sm);
    width: 10rem;
    position: relative;
    transition: color 0.45s;
  }

  a > span {
    position: relative;
    z-index: 2;
  }

  a::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--color-accent-light);
    transition: width 0.45s;
  }

  a:hover,
  a:active {
    cursor: pointer;
    color: var(--color-white);
  }

  a:hover:after,
  a:active:after {
    width: 100%;
  }

  a:active {
    border-color: var(--color-accent-dark);
  }

  a:active:after {
    background-color: var(--color-accent-dark);
  }
</style>
