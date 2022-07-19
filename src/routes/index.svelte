<script>
  import MetaTitle from '$lib/components/meta-title.svelte';
</script>

<MetaTitle title="Official website" />
<header class="flow-v">
  <p class="intro-text">Hi, I am</p>
  <h1>Paolo Giraudi.</h1>
  <p class="intro-text">I build beautiful websites.</p>
</header>
<p class="subtitle">
  I am a full-stack designer and I like this that and that. I am currently
  working on this with that.
</p>

<style>
  header {
    --flow-spacing: 0.25rem;
    text-align: center;
  }

  h1 {
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
    h1 {
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
    .subtitle,
    header {
      text-align: start;
    }

    h1 {
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
