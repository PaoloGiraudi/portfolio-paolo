<header class="flow-v">
  <p>Hi, I am</p>
  <h1>Paolo Giraudi.</h1>
  <p>I build beautiful websites.</p>
</header>

<style>
  header {
    --flow-spacing: 0.25rem;
  }

  h1 {
    font-size: var(--font-900);
    font-weight: var(--font-medium);
    color: var(--color-dark);
    line-height: 1.3;
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

  p {
    font-size: var(--font-600);
    font-weight: var(--font-thin);
  }
</style>
