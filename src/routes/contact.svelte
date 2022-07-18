<script lang="ts" context="module">
  import Form from '$lib/components/form.svelte';
  import SubmitButton from '$lib/components/submit-button.svelte';
  import TextField from '$lib/components/text-field/index.svelte';

  export const prerender = true;
</script>

<div>
  <h2>Wanna get in touch?</h2>
  <p>You can also find me here and there.</p>
</div>
<Form>
  <TextField name="name" type="name">Name</TextField>
  <TextField name="email" type="email">Email</TextField>
  <TextField name="subject" type="text">Subject</TextField>
  <TextField name="message" type="text">Message</TextField>
  <SubmitButton>Submit</SubmitButton>
</Form>
