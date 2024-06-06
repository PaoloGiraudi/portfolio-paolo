import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return {
    projects: [
      {
        name: 'Good Enough Metronome',
        description: 'A simple metronome that does only what it is supposed to do.',
        url: 'https://www.goodmetronome.com'
      },
      {
        name: 'Switcheroo',
        description: 'A simple units converter.',
        url: 'https://www.switcheroo.dev/'
      },
      {
        name: 'CSS Clock',
        description: 'A CSS powered clock experiment',
        url: 'https://paologiraudi.github.io/css-clock/'
      }
    ]
  };
};
