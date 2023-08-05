<script lang="ts">
  import type { PageParentData } from '../../routes/$types';
  export let data: PageParentData['caption'];
</script>

<small>
  {data.text}
  <a href={data.link.href} target="_blank" rel="noreferrer">{data.link.text}</a>
</small>

<style>
  @media (min-width: 62rem) {
    small {
      position: absolute;
      left: -6.25rem;
      font-size: var(--font-size-0);
      bottom: var(--size-1);
    }

    small > a {
      font-weight: var(--font-weight-5);
    }
  }
</style>
