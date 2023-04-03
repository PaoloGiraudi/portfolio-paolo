import { redirect, type Actions, error } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: 'ad59767c-3d15-4185-bb09-e277fac01689',
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),
        subject: data.get('subject'),
        from_name: 'Mission control',
        botcheck: true
      })
    });
    const result = await response.json();

    if (!result.success) {
      throw error(400, { message: 'Bad request' });
    }
    throw redirect(303, '/contact/thankyou');
  }
};
