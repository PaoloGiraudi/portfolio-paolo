import { fillName } from './fill-name';

const cursorSizes: Record<string, number> = {
  grow: 4,
  shrink: 0
};

export const animateCursor = (
  e: MouseEvent,
  isHovering: boolean,
  size?: string | null
) => {
  const cursorSquare = document.querySelector('.square') as HTMLElement;
  const cursorPointer = document.querySelector('.circle') as HTMLElement;

  const square = {
    x: e.clientX - cursorSquare?.offsetWidth / 2,
    y: e.clientY - cursorSquare?.offsetHeight / 2
  };
  const circle = {
    x: e.clientX - cursorPointer?.offsetWidth / 2,
    y: e.clientY - cursorPointer?.offsetHeight / 2
  };

  cursorSquare?.animate(
    {
      transform: `translate(${square.x}px, ${square.y}px) scale(${
        isHovering && size ? cursorSizes[size] : 1
      })`
    },
    {
      duration: 800,
      fill: 'forwards'
    }
  );
  cursorPointer?.animate(
    {
      transform: `translate(${circle.x}px, ${circle.y}px)`
    },
    {
      duration: 100,
      fill: 'forwards'
    }
  );

  if (isHovering && size === 'grow') {
    fillName(square);
  }
};
