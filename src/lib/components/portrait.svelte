<script lang="ts">
  import paolo from '$lib/assets/paolo.avif';
  import { hideCursor, resetCursor } from '$lib/utils/mouse-handlers';
</script>

<section>
  <figure>
    <div class="left" />
    <img
      src={paolo}
      alt="Paolo's portrait"
      draggable="false"
      on:mouseenter={hideCursor}
      on:mouseleave={resetCursor}
    />
    <div class="right">
      <small>
        Cover art by
        <a href="https://www.g-studio.design/" target="_blank" rel="noreferrer">
          Greta
        </a>
      </small>
    </div>
  </figure>
</section>

<style>
  section {
    display: none;
  }
  @media (min-width: 62rem) {
    section {
      --signature-bottom: 0.25rem;
      --frame-width: var(--stroke-md);
      grid-area: portrait;
      display: grid;
      place-items: center;
    }
    figure {
      position: relative;
      height: 80%;
      width: 80%;
      border-top: var(--frame-width) var(--color-dark) solid;
      border-bottom: var(--frame-width) var(--color-dark) solid;
      mix-blend-mode: darken;
    }

    img {
      object-fit: cover;
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: var(--color-bg);
    }

    .left,
    .right {
      width: 25%;
      position: absolute;
      background-color: var(--color-bg);
      height: calc(100% + var(--frame-width) * 2);
      top: calc(var(--frame-width) * -1);
      transition: transform 1s;
      z-index: 10;
    }

    .left {
      left: 0;
      border-right: var(--frame-width) solid var(--color-dark);
    }
    .right {
      right: 0;
      border-left: var(--frame-width) solid var(--color-dark);
    }

    figure:hover > .left {
      transform: translateX(-80%);
    }
    figure:hover > .right {
      transform: translateX(80%);
    }

    small {
      position: absolute;
      left: -6.75rem;
      font-size: var(--font-xs);
      bottom: var(--signature-bottom);
    }

    small > a {
      font-weight: var(--font-medium);
    }
  }
</style>
