import type { Validator } from 'svelte-use-form';
export interface Project {
  code: string;
  date: string;
  website: string;
  title: string;
  description: string;
  stack: string[];
  slug: string;
}

export type Fields = 'name' | 'email' | 'subject' | 'message';

export type FieldControl = {
  validator: Validator[];
  message: string;
  on: string;
};

export type FormControl = Record<Fields, FieldControl>;
