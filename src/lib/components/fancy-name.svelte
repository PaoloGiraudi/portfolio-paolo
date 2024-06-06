<header>
  <h1>
    <span class="intro-text">Hello, I am</span>
    <span class="name" data-cursor="grow" data-content="Paolo Giraudi.">Paolo Giraudi.</span>
  </h1>
</header>

<style>
  header {
    padding-block-end: var(--size-4);
  }
  span {
    display: block;
  }
  .intro-text {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-4);
  }
  .name {
    width: fit-content;
    font-size: var(--font-size-huge);
    font-weight: var(--font-weight-4);
    color: var(--text-1);
    line-height: var(--font-lineheight-1);
  }
  @supports (-webkit-text-stroke: 4px transparent) {
    .name {
      background: linear-gradient(75deg, var(--accent-1) 0%, var(--accent-2) 100%);
      color: var(--surface-1);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-stroke: var(--border-size-3) transparent;
      position: relative;
    }
  }
  @media (min-width: 50rem) {
    .name::before {
      content: attr(data-content);
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(75deg, var(--accent-1) 0%, var(--accent-2) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      clip-path: inset(100%);
    }
    .name:hover::before {
      clip-path: inset(var(--top, 0) var(--right, 0) var(--bottom, 0) var(--left, 0));
    }
  }
  @supports (-moz-appearance: none) {
    .name::before {
      clip-path: inset(50%);
    }
  }
</style>
