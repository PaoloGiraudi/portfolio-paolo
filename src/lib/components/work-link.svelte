<script lang="ts">
  import type { Project } from '$lib/types';
  export let project: Project;
</script>

<li>
  <a href={project.website} target="_blank" data-cursor="shrink" rel="noreferrer">
    {project.title}
  </a>
  <!-- <a href="work/{project.slug}" data-cursor="shrink">
    {project.title}
  </a> -->
</li>

<style>
  a {
    text-underline-offset: var(--size-1);
    text-decoration-color: var(--accent-2);
    font-size: var(--font-size-5);
  }
</style>
