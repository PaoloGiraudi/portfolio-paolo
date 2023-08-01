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
    overflow: hidden;
    grid-area: 1 / 1 / -1 / -1;
  }
  figure {
    background-color: var(--surface-1);
    position: relative;
    height: 150%;
    width: 150%;
    mix-blend-mode: var(--blend-mode);
  }

  img {
    object-fit: cover;
    background-color: var(--surface-2);
  }

  .right,
  .left {
    display: none;
  }

  @media (prefers-color-scheme: dark) {
    img {
      opacity: 0.5;
      filter: grayscale(1);
    }
  }

  @media (min-width: 62rem) {
    section {
      grid-area: portrait;
      place-items: center;
      display: grid;
      min-height: calc(100vh - var(--desktop-border) * 2);
    }
    figure {
      height: 80%;
      width: 80%;
      border-top: var(--border-size-2) var(--text-1) solid;
      border-bottom: var(--border-size-2) var(--text-1) solid;
    }

    img {
      height: 100%;
      width: 100%;
    }

    .left,
    .right {
      display: block;
      width: 25%;
      position: absolute;
      background-color: var(--surface-1);
      height: calc(100% + var(--border-size-2) * 2);
      top: calc(var(--border-size-2) * -1);
      transition: transform 450ms var(--ease-in-out-3);
      z-index: 10;
    }

    .left {
      left: 0;
      border-right: var(--border-size-2) solid var(--text-1);
    }
    .right {
      right: 0;
      border-left: var(--border-size-2) solid var(--text-1);
    }

    figure:hover > .left {
      transform: translateX(-80%);
    }
    figure:hover > .right {
      transform: translateX(80%);
    }
  }
</style>
