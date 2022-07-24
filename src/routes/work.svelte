<script>
  import MetaTitle from '$lib/components/meta-title.svelte';
  import PageHeading from '$lib/components/page-heading.svelte';
</script>

<MetaTitle title="My work" />
<PageHeading header="Take a look to some of my work.">
  Some of the projects I worked on.
</PageHeading>
<div>Work projects grid here</div>

<style>
  div {
    height: var(--content-height);
  }
</style>
