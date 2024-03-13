import type { Post } from '$lib/types.js';

export async function load({ fetch }) {
  const response = await fetch('api/posts');
  const posts: Post[] = await response.json();
  return {
    posts: posts,
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
      }
    ]
  };
}
