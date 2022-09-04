<script lang="ts">
  import { useForm } from 'svelte-use-form';
  const form = useForm();
</script>

<form
  name="contact"
  method="POST"
  action="/contact/thankyou"
  data-netlify="true"
  netlify-honeypot="bot-field"
  use:form
>
  <input type="hidden" name="form-name" value="contact" />
  <p data-hidden="hidden">
    <input name="bot-field" />
  </p>
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
