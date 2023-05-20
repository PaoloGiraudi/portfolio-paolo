import paolo from '$lib/assets/paolo.avif';
import { PortraitCaption } from '$lib/components';

export async function load({ url }) {
  return {
    pathname: url.pathname,
    src: paolo,
    alt: "Paolo's portrait",
    caption: PortraitCaption,
    cursor: 'shrink'
  };
}
