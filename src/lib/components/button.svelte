<script lang="ts">
  import { hideCursor, resetCursor } from '$lib/utils/mouse-handlers';
  export let type: 'submit' | 'button';
</script>

<button {type} on:mouseenter={hideCursor} on:mouseleave={resetCursor}>
  <span>
    <slot />
  </span>
</button>

<style>
  button {
    font-family: var(--secondary-font);
    align-self: center;
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

  button > span {
    position: relative;
    z-index: 2;
  }

  button::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--color-accent-light);
    transition: width 0.45s;
  }

  button:hover,
  button:active {
    color: var(--color-white);
  }

  button:hover:after,
  button:active:after {
    width: 100%;
  }

  button:active {
    border-color: var(--color-accent-dark);
  }

  button:active:after {
    background-color: var(--color-accent-dark);
  }

  @media (min-width: 62rem) {
    button {
      grid-area: button;
    }
  }
</style>
