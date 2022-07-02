<script>
  import paolo from '$lib/assets/paolo.avif';
</script>

<section>
  <div class="frame">
    <img src={paolo} alt="Paolo's portrait" />
    <small>
      Cover art by
      <a href="https://gretamabilia.myportfolio.com/" target="_blank">Greta</a>
    </small>
  </div>
</section>

<style>
  section {
    --signature-mr: 0.375rem;
    --signature-bottom: 0.25rem;
    --frame-width: var(--stroke-width);
    grid-area: portrait;
    display: grid;
    place-items: center;
  }
  .frame {
    position: relative;
    height: 80%;
    width: 80%;
    background: var(--color-dark);
    clip-path: polygon(20% 0, 80% 0, 80% 100%, 20% 100%);
    mix-blend-mode: darken;
  }

  img {
    object-fit: cover;
    position: absolute;
    height: calc(100% - var(--frame-width) * 2);
    width: calc(100% - var(--frame-width) * 2);
    top: var(--frame-width);
    left: var(--frame-width);
    background-color: var(--color-bg);
    clip-path: polygon(20% 0, 80% 0, 80% 100%, 20% 100%);
  }

  small {
    position: absolute;
    right: 20%;
    font-size: var(--font-300);
    margin-right: var(--signature-mr);
    bottom: var(--signature-bottom);
  }

  small > a {
    font-weight: var(--font-medium);
  }
</style>
