<script>
  export let data;
  const { title, Content } = data;
</script>

<article>
  <h1>{title}</h1>
  <p>Hey! How did you get here?</p>
  <Content />
</article>
