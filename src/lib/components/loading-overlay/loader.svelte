<div class="loader-square" />

<style>
  .loader-square {
    display: inline-block;
    height: 50px;
    width: 50px;
    background-color: transparent;
    border: var(--stroke-sm) var(--color-dark) solid;
    pointer-events: none;
    position: relative;
  }
  .loader-square::after {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    position: absolute;
    content: '';
    background-color: var(--color-accent-dark);
    mix-blend-mode: difference;

    bottom: calc(100% - 1rem);
    left: 0.5rem;
    animation: moving-ball 2s ease-in-out infinite;
  }
  @keyframes moving-ball {
    25% {
      left: calc(100% - 1rem);
      bottom: calc(100% - 1rem);
    }
    50% {
      left: calc(100% - 1rem);
      bottom: 0.4em;
    }
    75% {
      left: 0.5rem;
      bottom: 0.5rem;
    }
    100% {
      left: 0.5rem;
      bottom: calc(100% - 1rem);
    }
  }
</style>
