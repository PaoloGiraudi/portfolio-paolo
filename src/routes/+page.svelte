<script lang="ts">
  import ButtonLink from '$lib/components/button-link.svelte';
  import MetaTitle from '$lib/components/meta-title.svelte';
</script>

<MetaTitle title="Official website" />
<header>
  <h1>
    <span class="intro-text">Hello, I am</span>
    <span class="name" data-cursor="grow">Paolo Giraudi.</span>
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
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: var(--color-bg);
      -webkit-text-stroke: var(--stroke-md) transparent;
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
