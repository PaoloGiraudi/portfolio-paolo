<script lang="ts">
  import type { Post } from '$lib/types';
  export let post: Post;
</script>

<div class="flex space-between">
  <a href={`/posts/${post.slug}`} data-cursor="shrink" class="link">
    {post.title}
  </a>
  <time>{post.date}</time>
</div>

<style>
  div {
    width: 100%;
  }
  a {
    font-size: var(--font-size-3);
  }
  time {
    font-size: var(--font-size-1);
    color: var(--text-2);
  }
  @media (min-width: 50rem) {
    div {
      width: var(--size-content-3);
    }
  }
</style>
