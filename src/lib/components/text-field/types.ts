import type { Validator } from 'svelte-use-form';

export type Fields = 'name' | 'email' | 'subject' | 'message';

export type FieldControl = {
  validator: Validator[];
  message: string;
  on: string;
};

export type FormControl = Record<Fields, FieldControl>;
