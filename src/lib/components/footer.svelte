<script>
  import { Github, Linkedin } from '$lib/icons';
</script>

<footer>
  <a
    aria-label="Redirect to Linkedin"
    href="https://www.linkedin.com/in/paologiraudi/"
    target="_blank"
    rel="noopener noreferrer"
    data-cursor="shrink"
  >
    <Linkedin />
  </a>
  <a
    aria-label="Redirect to Github"
    href="https://github.com/PaoloGiraudi"
    target="_blank"
    rel="noopener noreferrer"
    data-cursor="shrink"
  >
    <Github />
  </a>
</footer>

<style>
  footer {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    bottom: var(--desktop-border);
    padding: var(--size-2);
  }
  a {
    display: grid;
    place-items: center;
    color: var(--text-2);
    width: var(--size-7);
    height: var(--size-7);
  }
  @media (min-width: 62rem) {
    footer {
      position: absolute;
      display: flex;
      bottom: var(--desktop-border);
      right: var(--desktop-border);
      padding: var(--size-2);
    }
    a {
      display: grid;
      place-items: center;
      color: var(--text-2);
      width: var(--size-7);
      height: var(--size-7);
    }
  }
</style>
