<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';
  import Loader from './loader.svelte';
  export let loading: Boolean;
</script>

{#if loading}
  <div class="overlay" out:slide={{ duration: 1200, easing: quintInOut }}>
    <div class="loader" out:fade={{ duration: 500 }}>
      <Loader />
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
    height: 50px;
    width: 50px;
  }
</style>
