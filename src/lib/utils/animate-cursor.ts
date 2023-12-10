import { fillName } from './fill-name';

const cursorSizes: Record<string, number> = {
  grow: 4,
  shrink: 0
};

const options: KeyframeAnimationOptions = {
  duration: 450,
  fill: 'forwards',
  easing: 'ease-in-out'
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
      marginTop: `${square.y}px`
    },
    {
      ...options,
      duration: 150
    }
  );

  if (isHovering && size) {
    cursorSquare?.animate(
      {
        transform: `scale(${cursorSizes[size]})`
      },
      options
    );

    size === 'grow' && fillName(square);
  } else {
    cursorSquare?.animate(
      {
        transform: 'scale(1)'
      },
      options
    );
  }
};
