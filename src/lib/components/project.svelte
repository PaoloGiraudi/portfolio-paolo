<script lang="ts">
  import type { PageData } from '../../routes/$types';
  export let project: PageData['projects'][number];
</script>

<div>
  <a href={project.url} data-cursor="shrink" target="_blank" rel="noopener noreferrer">
    {project.name}
  </a>
  <p>{project.description}</p>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: var(--size-1);
  }
  a {
    font-size: var(--font-size-3);
    text-underline-offset: 2px;
    text-decoration-color: var(--accent-1);
  }
  p {
    font-size: var(--font-size-2);
    text-wrap: balance;
    color: var(--text-2);
  }

  @media (min-width: 50rem) {
    div {
      flex-basis: var(--size-content-2);
    }
  }
</style>
