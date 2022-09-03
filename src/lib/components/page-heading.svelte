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
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0.25rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  h2 {
    font-size: var(--font-lg);
  }

  @media (min-width: 62rem) {
    .page-heading {
      align-items: flex-start;
      text-align: start;
    }
    h2 {
      font-size: var(--font-xl);
    }
    p {
      max-width: 45ch;
    }
  }
</style>
