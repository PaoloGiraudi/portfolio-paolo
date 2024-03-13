<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>{data.metadata.title}</title>
</svelte:head>

<article class="prose">
  <svelte:component this={data.content} />
</article>

<style>
  article {
    padding-inline: var(--size-3);
    margin-block: var(--size-8);
    margin-inline: auto;
    text-wrap: pretty;
    overflow: hidden;
  }
</style>
