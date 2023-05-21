<script lang="ts">
  import type { Project } from '$lib/types';
  export let project: Project;
  const { code, description, slug, title, website } = project;
</script>

<li>
  <article class="flow-v">
    <!-- <a href="work/{slug}"> -->
    <h3>{title}</h3>
    <!-- </a> -->
    <p>{description}</p>
    <div class="links">
      <a href={website} target="__blank">Website</a>
      {#if code}
        <a href={code} target="__blank">Code</a>
      {/if}
    </div>
  </article>
</li>

<style>
  li {
    display: flex;
    border-width: var(--stroke-sm);
    border-color: var(--color-accent-light);
    border-style: solid;
  }
  article {
    --flow-spacing: 0.25rem;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }

  .links {
    display: flex;
    gap: 1rem;
  }
</style>
