import { animateCursor } from './animate-cursor';

export const onMouseMove = (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  const hoverElement = target?.closest('[data-cursor]') as HTMLElement;
  const isHovering = Boolean(hoverElement);
  const cursorSize = hoverElement?.dataset?.cursor;

  animateCursor(e, isHovering, cursorSize);
};
