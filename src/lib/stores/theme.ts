import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const ONE_YEAR = 60 * 60 * 24 * 365;
export type Theme = 'light' | 'dark' | 'auto';

const prefersDarkMode = browser && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userTheme = browser && (document.documentElement.getAttribute('data-theme') as Theme);

export const theme = writable<Theme>(
  userTheme && userTheme !== 'auto' ? userTheme : prefersDarkMode ? 'dark' : 'light'
);

export const setTheme = (newTheme: Theme) => {
  theme.set(newTheme);
  window.localStorage.setItem('theme', newTheme);
  document.cookie = `theme=${newTheme}; max-age=${ONE_YEAR}; path=/; SameSite=Lax`;
  document.documentElement.setAttribute('data-theme', newTheme);
};
