import type { Validator } from 'svelte-use-form';
export interface Meta {
  code: string;
  date: string;
  demo: string;
  title: string;
  description: string;
  stack: string[];
}

export interface Project {
  meta: Meta;
  path: string;
}

export type Fields = 'name' | 'email' | 'subject' | 'message';

export type FieldControl = {
  validator: Validator[];
  message: string;
  on: string;
};

export type FormControl = Record<Fields, FieldControl>;
