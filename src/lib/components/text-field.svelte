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
  {#if name === 'message'}
    <textarea {name} use:validators={field.validator} />
  {:else}
    <input {name} {type} use:validators={field.validator} />
  {/if}
  <Hint class="hint" for={name} on={field.on}>
    {field.message}
  </Hint>
</div>

<style>
  .form-field {
    display: grid;
    grid-template-rows: auto auto 1rem;
  }

  input,
  textarea {
    border: none;
    background-color: var(--color-bg);
    border-bottom-width: var(--stroke-sm);
    border-bottom-style: solid;
    border-bottom-color: var(--color-dark);
    font-size: var(--font-sm);
  }

  input:focus-visible,
  textarea:focus-visible {
    border-bottom-color: var(--color-accent-light);
  }

  textarea {
    resize: none;
    height: 5rem;
  }

  label {
    font-size: var(--font-xs);
    margin-bottom: 0.5rem;
    color: var(--color-dark-subtle);
  }

  @media (min-width: 62rem) {
    label {
      font-size: var(--font-sm);
    }
  }
</style>
