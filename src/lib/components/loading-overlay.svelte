<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';

  export let loading: Boolean;
</script>

{#if loading}
  <div class="overlay" out:slide={{ duration: 1200, easing: quintInOut }}>
    <div class="loader" out:fade={{ duration: 500 }}>
      <div class="loader-square" />
    </div>
  </div>
{/if}
<slot />

<style>
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available;
    width: -moz-available;
    width: -webkit-fill-available;
    width: fill-available;
    z-index: 50;
    background-color: var(--surface-1);
  }
  .loader {
    position: relative;
    height: var(--size-8);
  }

  .loader-square {
    display: inline-block;
    height: var(--size-8);
    aspect-ratio: 1;
    background-color: transparent;
    border: var(--border-size-2) var(--text-1) solid;
    pointer-events: none;
    position: relative;
  }
  .loader-square::after {
    --dot-offset: var(--size-2);
    height: var(--size-2);
    aspect-ratio: 1;
    border-radius: 50%;
    position: absolute;
    content: '';
    background-color: var(--accent-1);
    mix-blend-mode: difference;
    bottom: calc(100% - var(--dot-offset) * 2);
    left: var(--dot-offset);
    animation: moving-ball 2s cubic-bezier(0.1, 0, 0.9, 1) infinite;
  }
  @keyframes moving-ball {
    25% {
      left: calc(100% - var(--dot-offset) * 2);
      bottom: calc(100% - var(--dot-offset) * 2);
    }
    50% {
      left: calc(100% - var(--dot-offset) * 2);
      bottom: var(--dot-offset);
    }
    75% {
      left: var(--dot-offset);
      bottom: var(--dot-offset);
    }
    100% {
      left: var(--dot-offset);
      bottom: calc(100% - var(--dot-offset) * 2);
    }
  }
</style>
