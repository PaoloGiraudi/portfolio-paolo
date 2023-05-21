<script lang="ts">
  import { MetaTitle, PageHeading, WorkLink, WorkList } from '$lib/components';
  import type { Project } from '$lib/types';
  export let data: { projects: Project[] };
</script>

<MetaTitle title="My work" />
<PageHeading header="My projects" />
<WorkList>
  {#each data.projects as project}
    <WorkLink {project} />
  {/each}
</WorkList>
