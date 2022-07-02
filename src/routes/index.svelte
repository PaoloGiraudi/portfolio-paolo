<header>
  <p>Hi, I am</p>
  <h1>Paolo Giraudi.</h1>
  <p>I build beautiful websites.</p>
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: var(--font-900);
    font-weight: var(--font-medium);
    color: var(--color-dark);
  }

  @supports (-webkit-text-stroke: 4px transparent) {
    h1 {
      background: linear-gradient(
        75deg,
        var(--color-gradient-dark) 0%,
        var(--color-gradient-light) 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: var(--color-bg);
      -webkit-text-stroke: var(--stroke-width) transparent;
    }
  }

  p {
    font-size: var(--font-600);
    font-weight: var(--font-thin);
  }
</style>
