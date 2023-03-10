<script lang="ts">
  import ButtonLink from '$lib/components/button-link.svelte';
  import MetaTitle from '$lib/components/meta-title.svelte';
  import { fillName } from '$lib/utils/fill-name';
</script>

<MetaTitle title="Official website" />
<header>
  <h1>
    <span class="intro-text">Hello, I am</span>
    <span class="name" data-cursor="grow" data-content="Paolo Giraudi.">
      Paolo Giraudi.
    </span>
    <span class="intro-text">Welcome to my website.</span>
  </h1>
</header>
<p class="subtitle">
  I am a full stack designer based in Sweden. I like boxy designs and pastel
  colors.
</p>
<ButtonLink href="/work">Check me out</ButtonLink>

<style>
  h1 {
    text-align: center;
  }

  span {
    display: block;
  }

  .name {
    width: fit-content;
    font-size: var(--font-xxl);
    font-weight: var(--font-medium);
    color: var(--color-dark);
    line-height: 1.25;
  }

  .intro-text {
    font-size: var(--font-lg);
    font-weight: var(--font-thin);
  }

  .subtitle {
    color: var(--color-dark-subtle);
    font-size: var(--font-md);
    max-width: 45ch;
    text-align: center;
    align-self: center;
  }

  @supports (-webkit-text-stroke: 4px transparent) {
    .name {
      background: linear-gradient(
        75deg,
        var(--color-accent-dark) 0%,
        var(--color-accent-light) 100%
      );
      color: var(--color-bg);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-stroke: var(--stroke-lg) transparent;
      position: relative;
      display: inline-block;
    }
  }

  @media (min-width: 62rem) {
    h1 {
      padding-top: 4rem;
    }
    h1,
    .subtitle {
      text-align: start;
    }

    .name {
      font-size: var(--font-max);
    }

    .name::before {
      content: attr(data-content);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        75deg,
        var(--color-accent-dark) 0%,
        var(--color-accent-light) 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      clip-path: inset(100%);
      transition: clip-path 0.1s cubic-bezier(0.29, 0.73, 0.74, 1.02);
    }
    .name:hover::before {
      clip-path: inset(var(--top) var(--right) var(--bottom) var(--left));
    }

    .intro-text {
      font-size: var(--font-xl);
    }

    .subtitle {
      font-size: var(--font-lg);
    }

    .subtitle {
      align-self: unset;
    }
  }
</style>
