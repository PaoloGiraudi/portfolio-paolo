<script>
  export let data;
  const { title, code, website } = data.metadata;
</script>

<div>
  <a href="/work">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  </a>
  <h1>{data.metadata.title}</h1>
</div>
<div>
  <a href={website} target="__blank">Website</a>
  {#if code}
    <a href={code} target="__blank">Code</a>
  {/if}
</div>
<slot />

<style>
  div {
    display: flex;
    align-items: center;
    gap: var(--size-3);
    margin-block-end: var(--size-3);
  }
  a {
    display: grid;
    place-items: center;
  }
</style>
