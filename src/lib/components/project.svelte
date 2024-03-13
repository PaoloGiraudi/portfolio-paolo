<script lang="ts">
  import type { PageData } from '../../routes/$types';
  export let project: PageData['projects'][number];
</script>

<div class="flex-col gap-1">
  <a href={project.url} data-cursor="shrink" target="_blank" rel="noopener noreferrer" class="link">
    {project.name}
  </a>
  <p>{project.description}</p>
</div>

<style>
  a {
    font-size: var(--font-size-md);
  }
  p {
    font-size: var(--font-size-sm);
    text-wrap: balance;
    color: var(--text-2);
  }

  @media (min-width: 50rem) {
    div {
      flex-basis: var(--size-content-2);
    }
  }
</style>
