<script lang="ts">
  import { page } from '$app/stores';
</script>

<section>
  <figure>
    <div class="left" />
    <img
      src={$page.data.src}
      alt={$page.data.alt}
      draggable="false"
      data-cursor={$page.data.cursor}
    />
    <div class="right">
      {#if $page.data.caption}
        <svelte:component this={$page.data.caption} />
      {/if}
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
      min-height: calc(100vh - var(--desktop-border) * 2);
    }
    figure {
      position: relative;
      height: 80%;
      width: 80%;
      border-top: var(--frame-width) var(--color-dark) solid;
      border-bottom: var(--frame-width) var(--color-dark) solid;
      mix-blend-mode: darken;
    }

    .left,
    .right {
      width: 25%;
      position: absolute;
      background-color: var(--color-bg);
      height: calc(100% + var(--frame-width) * 2);
      top: calc(var(--frame-width) * -1);
      transition: transform 0.5s ease-in-out;
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

    img {
      object-fit: cover;
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: var(--color-bg);
    }
  }
</style>
