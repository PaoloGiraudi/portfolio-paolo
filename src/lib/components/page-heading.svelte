<script lang="ts">
  export let header: string;
</script>

<div class="page-heading">
  <h2>{header}</h2>
  <p>
    <slot />
  </p>
</div>

<style>
  .page-heading {
    grid-area: heading;
    display: flex;
    flex-direction: column;
    row-gap: var(--size-1);
    margin-block-end: var(--size-8);
  }
  h2 {
    font-size: var(--font-size-6);
    font-weight: var(--font-weight-5);
    text-wrap: balance;
  }

  p {
    font-size: var(--font-size-3);
    text-wrap: balance;
  }

  @media (min-width: 62rem) {
    .page-heading {
      align-items: flex-start;
      text-align: start;
    }

    p {
      max-inline-size: var(--size-content-2);
    }
  }
</style>
