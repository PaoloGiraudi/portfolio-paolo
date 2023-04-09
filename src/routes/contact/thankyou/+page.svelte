<script>
  import { ButtonLink, MetaTitle } from '$lib/components';
</script>

<MetaTitle title="Thank you!" />
<div class="flow-v success">
  <h1>Thank you!</h1>
  <p>Your message has been received.</p>
  <ButtonLink href="/">Back to the home</ButtonLink>
</div>

<style>
  .success {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .success > p {
    margin-bottom: 2rem;
  }

  @media (min-width: 62rem) {
    .success {
      display: flex;
      flex-direction: column;
      align-items: unset;
    }
  }
</style>
