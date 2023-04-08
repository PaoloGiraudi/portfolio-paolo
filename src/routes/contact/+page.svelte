<script lang="ts">
  import Form from '$lib/components/form.svelte';
  import MetaTitle from '$lib/components/meta-title.svelte';
  import PageHeading from '$lib/components/page-heading.svelte';
  import Button from '$lib/components/button.svelte';
  import TextField from '$lib/components/text-field/index.svelte';
  import { applyAction, type SubmitFunction } from '$app/forms';
  import { goto } from '$app/navigation';
  import LoadingOverlay from '$lib/components/loading-overlay/overlay.svelte';

  let loading = false;

  const submit: SubmitFunction = ({ data, cancel }) => {
    if (data.get('website-url') !== null) {
      cancel();
      goto('/contact/thankyou');
    }
    loading = true;
    return async ({ result }) => {
      loading = false;
      await applyAction(result);
    };
  };
</script>

<MetaTitle title="Contact me" />
<PageHeading header="Questions? Send me a message!">
  You can also find me on
  <a
    href="http://github.com/PaoloGiraudi"
    target="__blank"
    data-cursor="shrink"
  >
    Github
  </a>
  and
  <a
    href="https://linkedin.com/in/paologiraudi/"
    target="__blank"
    data-cursor="shrink"
  >
    LinkedIn
  </a>.
</PageHeading>
<Form {submit}>
  <LoadingOverlay {loading}>
    <TextField name="name" type="name">Name</TextField>
    <TextField name="email" type="email">Email</TextField>
    <TextField name="subject" type="text">Subject</TextField>
    <TextField name="message" type="text">Message</TextField>
    <Button type="submit">Send</Button>
  </LoadingOverlay>
</Form>
