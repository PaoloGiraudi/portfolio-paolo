<script lang="ts" context="module">
  import Form from '$lib/components/form.svelte';
  import MetaTitle from '$lib/components/meta-title.svelte';
  import PageHeading from '$lib/components/page-heading.svelte';
  import SubmitButton from '$lib/components/submit-button.svelte';
  import TextField from '$lib/components/text-field/index.svelte';

  export const prerender = true;
</script>

<MetaTitle title="Contact me" />
<PageHeading header="Questions? Send me a message.">
  You can also find me on Github and Linkedin.
</PageHeading>
<Form>
  <TextField name="name" type="name">Name</TextField>
  <TextField name="email" type="email">Email</TextField>
  <TextField name="subject" type="text">Subject</TextField>
  <TextField name="message" type="text">Message</TextField>
  <SubmitButton>Submit</SubmitButton>
</Form>

<style>
</style>
