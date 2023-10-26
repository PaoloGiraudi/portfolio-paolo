<script lang="ts">
  export let name: string, description: string, url: string;
</script>

<div>
  <a href={url} data-cursor="shrink" target="_blank" rel="noopener noreferrer"> {name}</a>
  <p>{description}</p>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: var(--size-1);
  }
  a {
    font-size: var(--font-size-3);
    text-underline-offset: 2px;
    text-decoration-color: var(--accent-1);
  }
  p {
    font-size: var(--font-size-2);
    text-wrap: balance;
    color: var(--text-2);
  }

  @media (min-width: 62rem) {
    div {
      flex-basis: var(--size-content-2);
    }
  }
</style>
