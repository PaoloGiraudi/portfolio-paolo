<script lang="ts">
  import type { Projects } from '$lib/types';

  import MetaTitle from '$lib/components/meta-title.svelte';
  import PageHeading from '$lib/components/page-heading.svelte';
  import WorkCard from '$lib/components/work-card.svelte';
  import WorkList from '$lib/components/work-list.svelte';

  export let data: { projects: Projects };
</script>

<MetaTitle title="My work" />
<PageHeading header="I am still working on this page...">
  So many things to do and very little time to complete this. But it is coming,
  I promise!
</PageHeading>
<WorkList>
  {#each data.projects as project}
    <WorkCard {...project} />
  {/each}
</WorkList>
