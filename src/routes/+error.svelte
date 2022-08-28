<script lang="ts">
  import MetaTitle from '$lib/components/meta-title.svelte';
  import { page } from '$app/stores';
</script>

<MetaTitle title="Oops :(" />
<h1>{$page.status}: {$page.error.message}</h1>
<h2>Oops! Something went wrong :(</h2>
<p>
  Try to refresh the page or go back to the
  <a href="/" sveltekit:prefetch>Home</a>
</p>
