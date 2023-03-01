import { gsap } from 'gsap';

export const onMouseMove = (e: MouseEvent) => {
  gsap.to('.rect', {
    duration: 0.4,
    x: e.pageX - 15,
    y: e.pageY - 15
  });
  gsap.to('.circle', {
    duration: 0.1,
    x: e.pageX - 5,
    y: e.pageY - 10
  });
};

export const growCursor = () => {
  gsap.to('.rect', {
    duration: 0.4,
    scale: 4
  });
};
export const resetCursor = () => {
  gsap.to('.rect', {
    duration: 0.3,
    scale: 1
  });
};

export const hideCursor = () => {
  gsap.to('.rect', {
    duration: 0.3,
    scale: 0
  });
};
