<script>
  import { portal } from '$lib/utils/portal';
</script>

<div class="cursor" use:portal={'#portfolio'}>
  <div class="square" />
  <div class="circle" />
</div>

<style>
  .cursor {
    display: none;
  }
  @media (min-width: 62rem) {
    .cursor {
      display: contents;
      pointer-events: none;
    }
    .cursor > div {
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      aspect-ratio: 1;
    }

    .square {
      height: var(--size-7);
      border: var(--border-size-1) solid var(--text-1);
      background-color: transparent;
    }

    .circle {
      border-radius: 50%;
      height: var(--size-2);
      background-color: var(--accent-1);
      mix-blend-mode: difference;
    }
  }
</style>
