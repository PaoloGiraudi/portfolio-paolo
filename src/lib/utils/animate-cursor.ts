import { fillName } from './fill-name';

const cursorSizes: Record<string, number> = {
  grow: 4,
  shrink: 0
};

export const animateCursor = (e: MouseEvent, isHovering: boolean, size?: string | undefined) => {
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

  cursorPointer.style.marginLeft = `${circle.x}px`;
  cursorPointer.style.marginTop = `${circle.y}px`;

  cursorSquare?.animate(
    {
      marginLeft: `${square.x}px`,
      marginTop: `${square.y}px`,
      transform: `scale(${isHovering && size ? cursorSizes[size] : 1})`
    },
    {
      duration: 300,
      fill: 'forwards',
      easing: 'ease-in-out'
    }
  );

  if (isHovering && size === 'grow') {
    fillName(square);
  }
};
