<script>
  import { Github, Linkedin, Email } from '$lib/icons';
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
  <a
    aria-label="Send me an email"
    href="mailto:me@paologiraudi.com"
    target="_blank"
    rel="noopener noreferrer"
    data-cursor="shrink"
  >
    <Email />
  </a>
</footer>

<style>
  footer {
    display: flex;
    justify-content: flex-end;
    bottom: var(--mobile-border);
    gap: var(--size-1);
    padding: var(--size-2);
  }
  a {
    display: grid;
    place-items: center;
    color: var(--text-2);
    width: var(--size-7);
    height: var(--size-7);
  }
  @media (min-width: 50rem) {
    footer {
      position: absolute;
      bottom: var(--desktop-border);
      right: var(--desktop-border);
      gap: 0;
      margin-inline: 0;
    }
  }
</style>
