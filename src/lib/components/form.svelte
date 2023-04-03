<script lang="ts">
  import { enhance, type SubmitFunction } from '$app/forms';
  import { useForm } from 'svelte-use-form';
  const form = useForm();
  export let submit: SubmitFunction;
</script>

<form method="POST" use:form use:enhance={submit}>
  <input type="checkbox" name="botcheck" id="" style="display: none;" />
  <slot />
</form>

<style>
  :global(.hint) {
    font-size: var(--font-xs);
    font-family: var(--secondary-font);
    color: var(--color-danger);
  }
  :global(.form-field[data-type='subject']) {
    grid-area: subject;
  }
  :global(.form-field[data-type='message']) {
    grid-area: message;
  }

  form {
    font-family: var(--secondary-font);
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 0.5rem;
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
      column-gap: 1rem;
      row-gap: 1.5rem;
      width: 70%;
    }
  }
</style>
