import { SCRIPTS_ID } from '$env/static/private';
import { type Actions, redirect, error } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const response = await fetch(
      `https://script.google.cm/macros/s/${SCRIPTS_ID}/exec`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          subject: data.get('subject'),
          message: data.get('message')
        })
      }
    );

    if (response.status === 200) {
      throw redirect(303, '/contact/thankyou');
    } else {
      throw error(response.status, { message: 'Failed' });
    }
  }
};
