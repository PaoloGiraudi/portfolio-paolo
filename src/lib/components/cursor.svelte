<script>
  import { portal } from '$lib/utils/portal';
</script>

<div class="cursor" use:portal={'#portfolio'}>
  <div class="rect">
    <svg height="30" width="30">
      <rect
        width="30"
        height="30"
        fill="none"
        stroke="var(--color-white)"
        stroke-width="2"
      />
    </svg>
  </div>

  <div class="circle">
    <svg height="12" width="12">
      <circle cx="5" cy="5" r="4" stroke-width="0" />
    </svg>
  </div>
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
      top: 0;
      left: 0;
      mix-blend-mode: difference;
      z-index: 1000;
    }

    circle {
      fill: var(--color-accent-dark);
    }
  }
</style>
