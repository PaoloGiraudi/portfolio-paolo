<script lang="ts">
  import { menu } from '$lib/stores/menu';
</script>

<button on:click={() => menu.set(!$menu)} class:open={$menu}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</button>

<style>
  button {
    border: none;
    display: grid;
    place-items: center;
    height: var(--size-6);
    width: var(--size-8);
    background-color: transparent;
    position: absolute;
    top: var(--size-4);
    left: var(--size-4);
    z-index: 30;
  }

  span {
    position: absolute;
    height: var(--border-size-2);
    background-color: var(--text-2);
    width: var(--size-8);
  }

  span:nth-child(1) {
    top: 0;
  }
  span:nth-child(3) {
    bottom: 0;
  }

  .open span:nth-child(1),
  .open span:nth-child(3) {
    display: none;
  }

  .open span:nth-child(2) {
    transform: rotate(33deg);
    transform-origin: center;
  }

  .open span:nth-child(4) {
    transform: rotate(-33deg);
    transform-origin: center;
  }

  @media (min-width: 640px) {
    button {
      display: none;
    }
  }
</style>
