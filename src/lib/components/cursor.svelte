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
      height: 2rem;
      border: 1px solid var(--color-dark);
      background-color: transparent;
    }

    .circle {
      border-radius: 50%;
      height: 0.5rem;
      background-color: var(--color-accent-dark);
      mix-blend-mode: difference;
    }
  }
</style>
