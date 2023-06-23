<script lang="ts">
  import { applyAction } from '$app/forms';
  import { goto } from '$app/navigation';
  import {
    Button,
    Form,
    LoadingOverlay,
    MetaTitle,
    PageHeading,
    TextField
  } from '$lib/components';
  import type { SubmitFunction } from '@sveltejs/kit';

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
