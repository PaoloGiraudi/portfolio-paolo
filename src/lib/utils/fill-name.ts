export const fillName = (square: { x: number; y: number }) => {
  const name = document.querySelector('.name') as HTMLElement;
  const nameRect = name.getBoundingClientRect();

  const startX = nameRect.x;
  const startY = nameRect.y;
  const endX = nameRect.width;
  const endY = nameRect.height;

  name.style.setProperty('--top', `${square.y - startY - 48}px`);
  name.style.setProperty('--right', `${startX + endX - 64 - 12 - square.x}px`);
  name.style.setProperty('--bottom', `${startY + endY - 64 - 12 - square.y}px`);
  name.style.setProperty('--left', `${square.x - startX - 48}px`);
};
