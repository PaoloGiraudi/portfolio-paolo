<script lang="ts">
  import { Hint, validators } from 'svelte-use-form';
  import { fields } from '../utils/form-fields';
  import type { FormControl } from '$lib/types';

  export let name: string, type: string;

  const field = fields[name as keyof FormControl];
</script>

<div class="form-field" data-type={name}>
  <label for={name}>
    <slot />
  </label>
  <svelte:element
    this={name === 'message' ? 'textarea' : 'input'}
    {name}
    {type}
    id={name}
    use:validators={field.validator}
  />
  <Hint class="hint" for={name} on={field.on}>
    {field.message}
  </Hint>
</div>

<style>
  .form-field {
    display: grid;
    grid-template-rows: auto auto var(--size-3);
  }

  input,
  textarea {
    border: none;
    background-color: var(--surface-1);
    border-bottom-width: var(--border-size-2);
    border-bottom-style: solid;
    border-bottom-color: var(--text-1);
    font-size: var(--font-size-3);
    color: var(--text-1);
  }

  input:focus-visible,
  textarea:focus-visible {
    border-bottom-color: var(--accent-2);
  }

  textarea {
    resize: none;
    height: var(--size-11);
  }

  label {
    font-size: var(--font-size-2);
    margin-bottom: var(--size-2);
    color: var(--text-2);
  }

  @media (min-width: 62rem) {
    label {
      font-size: var(--font-size-3);
    }
  }
</style>
