export const portal = (component: HTMLElement, selector: string) => {
  const target = document.querySelector(selector);
  target?.appendChild(component);
};
