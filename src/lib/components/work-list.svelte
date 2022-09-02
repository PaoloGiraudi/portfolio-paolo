<ul class="flow-v">
  <slot />
</ul>

<style>
  ul {
    width: 100%;
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  @media (min-width: 62rem) {
    ul {
      padding-right: 0.75rem;
      width: 80%;
    }
  }
</style>
