<script lang="ts">
  import { Projects, Project } from '$lib/components';
  import Footer from '$lib/components/footer.svelte';
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<div>
  <header>
    <h1>
      <span class="intro-text">Hello, I am</span>
      <span class="name" data-cursor="grow" data-content="Paolo Giraudi.">Paolo Giraudi.</span>
    </h1>
  </header>
  <p class="subtitle">
    I am a software developer based in Sweden. I like boxy web designs and pastel colors.
  </p>
  <Projects>
    {#each data.projects as project}
      <Project name={project.name} description={project.description} url={project.url} />
    {/each}
  </Projects>
  <Footer />
</div>

<style>
  div {
    padding-inline: var(--size-4);
    grid-area: 1 / 1 / 3 / -1;
    height: 100%;
    max-inline-size: 100%;
    overflow-y: auto;
    z-index: 10;
    padding-block-start: 20dvh;
    background: linear-gradient(to top right, var(--surface-1) 75%, transparent 75%);
  }

  header {
    padding-block-end: var(--size-4);
  }

  span {
    display: block;
  }

  .name {
    width: fit-content;
    font-size: var(--font-size-10);
    font-weight: var(--font-weight-4);
    color: var(--text-1);
    line-height: var(--font-lineheight-1);
  }

  .intro-text {
    font-size: var(--font-size-6);
    font-weight: var(--font-weight-4);
  }

  .subtitle {
    color: var(--text-2);
    font-size: var(--font-size-4);
    max-inline-size: var(--size-content-2);
    text-wrap: balance;
    align-self: center;
    margin-block-end: var(--size-7);
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
    div {
      flex-basis: 50%;
    }
    h1,
    .subtitle {
      text-align: start;
    }

    .name {
      font-size: var(--font-size-10);
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
      transition: clip-path 0.1s var(--ease-elastic-1);
    }
    .name:hover::before {
      clip-path: inset(var(--top) var(--right) var(--bottom) var(--left));
    }

    .subtitle {
      align-self: unset;
    }
  }

  @supports (-moz-appearance: none) {
    .name::before {
      clip-path: inset(50%);
    }
  }
</style>
