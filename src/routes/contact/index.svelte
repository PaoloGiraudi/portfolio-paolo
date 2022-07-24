<script lang="ts" context="module">
  import Form from '$lib/components/form.svelte';
  import MetaTitle from '$lib/components/meta-title.svelte';
  import PageHeading from '$lib/components/page-heading.svelte';
  import Button from '$lib/components/button.svelte';
  import TextField from '$lib/components/text-field/index.svelte';

  export const prerender = true;
</script>

<MetaTitle title="Contact me" />
<PageHeading header="Questions? Send me a message!">
  You can also find me on
  <a href="http://github.com/PaoloGiraudi" target="__blank">Github</a>
  and
  <a href="https://linkedin.com/in/paologiraudi/" target="__blank">LinkedIn</a>.
</PageHeading>
<Form>
  <TextField name="name" type="name">Name</TextField>
  <TextField name="email" type="email">Email</TextField>
  <TextField name="subject" type="text">Subject</TextField>
  <TextField name="message" type="text">Message</TextField>
  <Button type="submit">Send</Button>
</Form>
