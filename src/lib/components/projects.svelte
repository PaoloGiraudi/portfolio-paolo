<section>
  <h2>Projects</h2>
  <div class="projects">
    <slot />
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: var(--size-3);
    padding-block-end: var(--size-10);
  }
  .projects {
    display: flex;
    flex-wrap: wrap;
    row-gap: var(--size-6);
    column-gap: var(--size-2);
  }
</style>
