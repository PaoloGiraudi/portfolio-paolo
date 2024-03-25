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
    overflow: hidden;
    mix-blend-mode: var(--blend-mode);
    direction: ltr;
    position: fixed;
    height: 100%;
    width: 90vw;
    left: 0;
    background-color: var(--surface-1);
  }
  figure {
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

  .left {
    display: none;
  }

  .right {
    display: contents;
  }

  small {
    position: absolute;
    font-size: var(--font-size-xs);
    left: var(--size-5);
    bottom: var(--size-5);
    & a {
      font-weight: var(--font-weight-5);
    }
  }
  @media (min-width: 50rem) {
    aside {
      display: grid;
      place-items: center;
      position: relative;
      flex-basis: 50%;
      max-width: 960px;
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
      left: -6.25rem;
      bottom: var(--size-1);
    }
  }
</style>
