<script context="module" lang="ts">
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`
      }
    };
  }
</script>

<script>
  export let title;
</script>

<h1>{title}</h1>
<h2>Oops! Something went wrong :(</h2>
<p>
  Try to refresh the page or go back to the
  <a href="/">Home</a>
</p>
