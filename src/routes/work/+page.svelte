<script lang="ts">
  import { MetaTitle, PageHeading, WorkCard, WorkList } from '$lib/components';
  import type { Project } from '$lib/types';

  export let data: { projects: Project[] };
</script>

<MetaTitle title="My work" />
<PageHeading header="I am still working on this page...">
  So many things to do and very little time to complete this. But it is coming,
  I promise!
</PageHeading>
<WorkList>
  {#each data.projects as project}
    <!-- pass full project for path -->
    <WorkCard meta={project.meta} />
  {/each}
</WorkList>
