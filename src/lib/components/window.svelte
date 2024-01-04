<script lang="ts">
  import { TwicImg } from '@twicpics/components/sveltekit';
</script>

<aside>
  <figure>
    <div class="left" />
    <span data-cursor="shrink">
      <TwicImg
        src="portrait.png"
        ratio="none"
        class="portrait"
        preTransform="focus=center/crop=85px85p"
      />
    </span>
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
    opacity: 0.6;
    overflow: hidden;
    mix-blend-mode: var(--blend-mode);
    direction: ltr;
    position: fixed;
    height: 100%;
    width: 85vw;
    left: 0;
  }
  figure {
    background-color: var(--surface-1);
    height: inherit;
    width: inherit;
  }

  :global(.portrait) {
    width: 100%;
    height: 100%;
  }

  :global(img) {
    background-color: var(--surface-2);
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
      position: relative;
      flex-basis: 50%;
    }
    figure {
      position: inherit;
      height: 80%;
      width: 80%;
      border-top: var(--border-size-2) var(--text-1) solid;
      border-bottom: var(--border-size-2) var(--text-1) solid;
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
