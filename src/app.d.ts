/// <reference types="@sveltejs/kit" />

import type { Theme } from '$lib/stores/theme';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
  namespace App {
    interface Locals {
      theme: Theme;
    }
    // interface Platform {}
    // interface Session {}
    // interface Stuff {}
  }
}

export {};
