<ul class="flow-v">
  <slot />
</ul>

<style>
  ul {
    max-inline-size: var(--size-content-3);
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
</style>
