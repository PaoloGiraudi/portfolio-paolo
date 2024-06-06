<script lang="ts">
  import { FancyName, Portrait, Project, Footer } from '$lib/components';
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<Portrait />
<div class="scroll-container">
  <div class="content">
    <FancyName />
    <p class="subtitle">
      I am a software developer based in Sweden. I like boxy web designs and pastel colors.
    </p>
    <section>
      <h2>Projects</h2>
      <div class="projects">
        {#each data.projects as project}
          <Project {project} />
        {/each}
      </div>
    </section>
    <Footer />
  </div>
</div>

<style>
  .scroll-container {
    position: relative;
    scroll-snap-align: start end;
    width: 180vw;
  }
  .content {
    position: relative;
    overflow-y: auto;
    padding-block-start: 15vh;
    padding-inline: var(--size-3);
    background-color: var(--surface-1);
    height: var(--content-height);
    width: var(--content-width);
    scroll-snap-align: start end;
    direction: ltr;
    box-shadow: calc(var(--border-size-2) * -1) 0 0 var(--text-1);
  }

  .subtitle {
    color: var(--text-2);
    font-size: var(--font-size-lg);
    max-inline-size: var(--size-content-2);
    text-wrap: balance;
    margin-block-end: var(--size-7);
  }

  section {
    display: flex;
    flex-direction: column;
    gap: var(--size-3);
    padding-block-end: var(--size-6);
  }

  h2 {
    font-size: var(--font-size-md);
    font-weight: 500;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    row-gap: var(--size-6);
    column-gap: var(--size-2);
    max-width: calc(2.5 * var(--size-content-2));
  }

  @media (min-width: 50rem) {
    .scroll-container {
      display: contents;
    }
    .content {
      flex-basis: 50%;
      padding-block-start: 20vh;
      box-shadow: none;
    }
  }
</style>
