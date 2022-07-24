<script context="module" lang="ts">
  export function load({
    error,
    status
  }: {
    error: TypeError;
    status: number;
  }): LoadOutput {
    return {
      props: {
        title: `${status}: ${error.message}`
      }
    };
  }
</script>

<script lang="ts">
  import MetaTitle from '$lib/components/meta-title.svelte';
  import type { LoadOutput } from '@sveltejs/kit';
  export let title: string;
</script>

<MetaTitle title="Oops :(" />
<h1>{title}</h1>
<h2>Oops! Something went wrong :(</h2>
<p>
  Try to refresh the page or go back to the
  <a href="/" sveltekit:prefetch>Home</a>
</p>
