import { email, required } from 'svelte-use-form';
import type { FormControl } from './types';

export const fields: FormControl = {
  name: {
    validator: [required],
    message: 'Wait, who are you?',
    on: 'required'
  },
  email: {
    validator: [email],
    message: 'Please enter a valid email',
    on: 'email'
  },
  subject: {
    validator: [required],
    message: 'Nobody likes (No Subject)',
    on: 'required'
  },
  message: {
    validator: [required],
    message: "Don't be shy",
    on: 'required'
  }
};
