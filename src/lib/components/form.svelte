<script lang="ts">
  import { enhance } from '$app/forms';
  import type { SubmitFunction } from '@sveltejs/kit';
  import { useForm } from 'svelte-use-form';

  const form = useForm();

  export let submit: SubmitFunction;
</script>

<form method="POST" use:form use:enhance={submit}>
  <div class="url-field">
    <label for="website-url">Your website</label>
    <input type="text" id="website-url" name="url" tabindex="-1" autocomplete="off" />
  </div>
  <slot />
</form>

<style>
  :global(.hint) {
    font-size: var(--font-size-0);
    font-family: var(--font-serif);
    color: var(--color-danger);
  }
  :global(.form-field[data-type='subject']) {
    grid-area: subject;
  }
  :global(.form-field[data-type='message']) {
    grid-area: message;
  }

  .url-field {
    position: absolute;
    left: -9999px;
  }

  form {
    padding-inline-end: var(--size-4);
    padding-block-end: var(--size-8);
    /* find better way */
    background-color: var(--surface-1);
    font-family: var(--font-serif);
    display: flex;
    flex-direction: column;
    max-inline-size: var(--size-content-3);
    row-gap: var(--size-2);
    position: relative;
  }

  @media (min-width: 62rem) {
    form {
      display: grid;
      grid-template-areas:
        'name email'
        'subject subject'
        'message message'
        'button button';
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(4, auto);
      column-gap: var(--size-3);
      row-gap: var(--size-5);
    }
  }
</style>
