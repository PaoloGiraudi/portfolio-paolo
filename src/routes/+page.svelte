<script lang="ts">
  import { Project } from '$lib/components';
  import Footer from '$lib/components/footer.svelte';
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<div class="content">
  <header>
    <h1>
      <span class="intro-text">Hello, I am</span>
      <span class="name" data-cursor="grow" data-content="Paolo Giraudi.">Paolo Giraudi.</span>
    </h1>
  </header>
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

<style>
  .content {
    position: relative;
    overflow-y: auto;
    padding-block-start: 15vh;
    padding-inline: var(--size-4);
    background-color: var(--surface-1);
    height: var(--content-height);
    width: var(--content-width);
    scroll-snap-align: start end;
    direction: ltr;
    box-shadow: calc(var(--border-size-2) * -1) 0 0 var(--text-1);
  }

  header {
    padding-block-end: var(--size-4);
    & span {
      display: block;
    }
    & .intro-text {
      font-size: var(--font-size-6);
      font-weight: var(--font-weight-4);
    }
    & .name {
      width: fit-content;
      font-size: var(--font-size-10);
      font-weight: var(--font-weight-4);
      color: var(--text-1);
      line-height: var(--font-lineheight-1);

      @supports (-webkit-text-stroke: 4px transparent) {
        background: linear-gradient(75deg, var(--accent-1) 0%, var(--accent-2) 100%);
        color: var(--surface-1);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-stroke: var(--border-size-3) transparent;
        position: relative;
      }
    }
  }

  .subtitle {
    color: var(--text-2);
    font-size: var(--font-size-4);
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
    font-weight: 500;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    row-gap: var(--size-6);
    column-gap: var(--size-2);
  }

  @media (min-width: 50rem) {
    .content {
      flex-basis: 50%;
      padding-block-start: 20vh;
      box-shadow: none;
    }

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
