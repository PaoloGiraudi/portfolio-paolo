<script lang="ts">
  import SubmitButton from '$lib/components/submit-button.svelte';
  import { useForm, Hint, validators, email, required } from 'svelte-use-form';
  const form = useForm();

  const handleSubmit = () => {
    $form.touched = true;
    if ($form.valid) {
      alert(JSON.stringify($form.values));
    }
  };
</script>

<div>
  <h2>Wanna get in touch?</h2>
  <p>You can also find me here and there.</p>
</div>
<form use:form>
  <div class="form-field">
    <label for="name">Name</label>
    <input name="name" type="name" use:validators={[required, email]} />
    <Hint class="hint" for="email" on="email">Wait, who are you?</Hint>
  </div>
  <div class="form-field">
    <label for="email">Email</label>
    <input name="email" type="email" use:validators={[required, email]} />
    <Hint class="hint" for="email" on="email">Please enter a valid email</Hint>
  </div>
  <div class="form-field" data-type="subject">
    <label for="subject">Subject</label>
    <input name="subject" type="text" use:validators={[required]} />
    <Hint class="hint" for="email" on="email">Nobody likes (No Subject)</Hint>
  </div>
  <div class="form-field" data-type="message">
    <label for="message">Message</label>
    <textarea name="message" type="text" use:validators={[required]} />
    <Hint class="hint" for="email" on="email">Don't be shy</Hint>
  </div>
  <SubmitButton label="Submit" {handleSubmit} />
</form>

<style>
  :global(.hint) {
    font-size: var(--font-300);
    font-family: var(--secondary-font);
    color: var(--color-danger);
  }

  form {
    font-family: var(--secondary-font);
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    width: 100%;
  }

  .form-field {
    display: grid;
    grid-template-rows: auto auto 1rem;
  }

  .form-field[data-type='subject'] {
    grid-area: subject;
  }
  .form-field[data-type='message'] {
    grid-area: message;
  }

  input,
  textarea {
    border: none;
    background-color: var(--color-bg);
    border-bottom-width: var(--stroke-sm);
    border-bottom-style: solid;
    border-bottom-color: var(--color-dark);
    font-size: var(--font-400);
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
    margin-bottom: 0.5rem;
    color: var(--color-dark-subtle);
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
