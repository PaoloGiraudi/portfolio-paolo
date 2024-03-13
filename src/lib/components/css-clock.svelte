<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes() + seconds / 60;
    const hours = now.getHours() + minutes / 60;

    document.documentElement.style.setProperty('--start-seconds', `${seconds * 6}deg`);
    document.documentElement.style.setProperty('--start-minutes', `${minutes * 6}deg`);
    document.documentElement.style.setProperty('--start-hours', `${hours * 30}deg`);
  });
</script>

<div></div>

<style>
  :root {
    --h: 160;
    --color: var(--h) 100% 5%;
    --shadow-color: var(--h) 10% 40%;

    &[data-theme='dark'] {
      --h: 175;
      --color: var(--h) 80% 45%;
      --shadow-color: var(--h) 10% 0%;
    }
  }

  @property --seconds {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
  }

  @property --minutes {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
  }

  @property --hours {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
  }

  *,
  *::after,
  *::before {
    aspect-ratio: 1;
    animation-fill-mode: forwards;
    box-shadow:
      0 3px 5px -2px hsl(var(--shadow-color) / 0.1),
      0 7px 14px -5px hsl(var(--shadow-color) / 0.2);
  }

  div {
    width: min(50rem, 100%);
    display: grid;
    place-items: center;
    grid-template-areas: 'clock';
    background-image: conic-gradient(from var(--seconds), transparent, hsl(var(--color) / 0.2));
    animation: 60s seconds linear infinite;
  }

  div::after {
    content: '';
    width: 80%;
    grid-area: clock;
    background-image: conic-gradient(from var(--minutes), transparent, hsl(var(--color) / 0.3));
    animation: 3600s minutes linear infinite;
  }

  div::before {
    content: '';
    width: 60%;
    grid-area: clock;
    background-image: conic-gradient(from var(--hours), transparent, hsl(var(--color) / 0.4));
    animation: 43200s hours linear infinite;
  }

  @keyframes seconds {
    from {
      --seconds: var(--start-seconds);
    }
    to {
      --seconds: calc(var(--start-seconds) + 1turn);
    }
  }
  @keyframes minutes {
    from {
      --minutes: var(--start-minutes);
    }
    to {
      --minutes: calc(var(--start-minutes) + 1turn);
    }
  }
  @keyframes hours {
    from {
      --hours: var(--start-hours);
    }
    to {
      --hours: calc(var(--start-hours) + 1turn);
    }
  }
</style>
