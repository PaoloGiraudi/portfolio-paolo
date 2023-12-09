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
        name: 'Kopli Sound Studio',
        description: 'The perfect creative office in the heart of Tallinn.',
        url: 'https://www.koplisoundstudio.ee/'
      },
      {
        name: 'My Portfolio',
        description: 'This very beautiful website.',
        url: 'https://www.paologiraudi.com/'
      }
    ]
  };
};
