<script lang="ts">
  import { useForm } from 'svelte-use-form';
  const form = useForm();
</script>

<form
  name="contact"
  method="post"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  use:form
>
  <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="bot-field" />
  <slot />
</form>

<style>
  :global(.hint) {
    font-size: var(--font-300);
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
    row-gap: 1.5rem;
    width: 100%;
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
      width: 70%;
    }
  }
</style>
