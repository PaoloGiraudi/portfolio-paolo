<script>
  import { Footer } from '$lib/components';
</script>

<div class="blog">
  <slot />
  <Footer />
</div>

<style>
  .blog {
    width: 100%;
    direction: ltr;
    overflow-y: auto;
  }
  .blog :global(footer) {
    padding-inline: var(--size-3);
  }

  @media (min-width: 50rem) {
    .blog :global(footer) {
      padding-inline: 0;
    }
  }
</style>
