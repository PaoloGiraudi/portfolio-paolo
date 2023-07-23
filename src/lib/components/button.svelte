<script lang="ts">
  export let type: 'submit' | 'button' | null = null;
  export let href: string | null = null;
  export let target: '__blank' | null = null;
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  {href}
  {target}
  {type}
  data-cursor="shrink"
  class="button"
>
  <span>
    <slot />
  </span>
</svelte:element>

<style global>
  .button {
    display: grid;
    place-items: center;
    text-decoration: none;
    font-family: var(--font-serif);
    color: var(--text-1);
    background-color: transparent;
    border-width: var(--border-size-2);
    border-color: var(--accent-2);
    border-style: solid;
    padding: var(--size-1) 0;
    font-size: var(--font-size-2);
    width: fit-content;
    padding-inline: 5ch;
    padding-block: 0.75ch;
    position: relative;
    transition: color 0.45s;
  }

  .button > span {
    font-size: var(--font-size-1);
    text-transform: uppercase;
    font-weight: var(--font-weight-5);
    letter-spacing: var(--font-letterspacing-2);
    position: relative;
    z-index: 2;
  }

  .button::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--accent-2);
    transition: width 0.45s;
  }

  .button:hover,
  .button:active {
    color: var(--frame);
  }

  .button:hover::after {
    width: 100%;
  }
  .button:active {
    border-color: var(--accent-1);
  }
  .button:active::after {
    background-color: var(--accent-1);
  }

  @media (min-width: 62rem) {
    .button {
      grid-area: button;
      text-transform: uppercase;
    }
  }
</style>
