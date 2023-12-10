<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
</script>

<aside>
  <figure>
    <div class="left" />
    <CldImage
      width={1280}
      height={1050}
      src="portfolio/portrait"
      alt="Description of my image"
      crop="crop"
      gravity="center"
      data-cursor="shrink"
    />
    <div class="right">
      <small data-cursor="shrink">
        Cover art by
        <a href="https://www.g-studio.design/" target="_blank" rel="noreferrer">Greta</a>
      </small>
    </div>
  </figure>
</aside>

<style>
  aside {
    opacity: 0.2;
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

  :global(img) {
    object-fit: cover;
    background-color: var(--surface-2);
    height: 35%;
  }

  .right,
  .left {
    display: none;
  }
  @media (min-width: 50rem) {
    aside {
      opacity: 1;
      display: grid;
      place-items: center;
      flex-basis: 50%;
      min-height: calc(100vh - var(--desktop-border) * 2);
    }
    figure {
      height: 80%;
      width: 80%;
      border-top: var(--border-size-2) var(--text-1) solid;
      border-bottom: var(--border-size-2) var(--text-1) solid;
    }

    :global(img) {
      height: 100%;
    }

    .left,
    .right {
      display: block;
      width: 25%;
      position: absolute;
      background-color: var(--surface-1);
      height: calc(100% + var(--border-size-2) * 2);
      top: calc(var(--border-size-2) * -1);
      transition: transform 450ms cubic-bezier(0.5, 0, 0.5, 1);
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

    small {
      position: absolute;
      left: -6.25rem;
      font-size: var(--font-size-0);
      bottom: var(--size-1);
    }

    small > a {
      font-weight: var(--font-weight-5);
    }
  }
</style>
