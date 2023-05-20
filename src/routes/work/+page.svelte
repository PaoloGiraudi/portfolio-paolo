<script lang="ts">
  import { MetaTitle, PageHeading, WorkCard, WorkList } from '$lib/components';
  import type { Project } from '$lib/types';
  export let data: { projects: Project[] };
</script>

<MetaTitle title="My work" />
<PageHeading header="My projects" />
<WorkList>
  {#each data.projects as project}
    <WorkCard {project} />
  {/each}
</WorkList>
