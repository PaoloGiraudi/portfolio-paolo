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
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
    z-index: 10;
    background-color: var(--color-bg);
  }
  .loader {
    position: relative;
    height: var(--loader-size);
  }

  .loader-square {
    display: inline-block;
    height: var(--loader-size);
    aspect-ratio: 1;
    background-color: transparent;
    border: var(--stroke-sm) var(--color-dark) solid;
    pointer-events: none;
    position: relative;
  }
  .loader-square::after {
    --dot-offset: 0.5rem;
    height: var(--dot-size);
    aspect-ratio: 1;
    border-radius: 50%;
    position: absolute;
    content: '';
    background-color: var(--color-accent-dark);
    mix-blend-mode: difference;
    bottom: calc(100% - var(--dot-offset) * 2);
    left: var(--dot-offset);
    animation: moving-ball 2s ease-in-out infinite;
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
