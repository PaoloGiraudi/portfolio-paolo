<script lang="ts">
  import { enhance, type SubmitFunction } from '$app/forms';
  import { useForm } from 'svelte-use-form';

  const form = useForm();

  export let submit: SubmitFunction;
</script>

<form method="POST" use:form use:enhance={submit}>
  <div class="url-field">
    <label for="website-url">Your website</label>
    <input
      type="text"
      id="website-url"
      name="url"
      tabindex="-1"
      autocomplete="nope"
    />
  </div>
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

  .url-field {
    position: absolute;
    left: -9999px;
  }

  form {
    font-family: var(--secondary-font);
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 0.5rem;
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
      column-gap: 1rem;
      row-gap: 1.5rem;
      width: 70%;
    }
  }
</style>
