<script>
  import { Button, MetaTitle } from '$lib/components';
</script>

<MetaTitle title="Thank you!" />
<div class="flow-v success">
  <h1>Thank you!</h1>
  <p>Your message has been received.</p>
  <Button href="/">Back to the home</Button>
</div>

<style>
  .success {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .success > p {
    margin-bottom: var(--size-7);
  }

  @media (min-width: 62rem) {
    .success {
      display: flex;
      flex-direction: column;
      align-items: unset;
    }
  }
</style>
