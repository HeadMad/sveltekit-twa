import { validateData } from '$lib';

export async function load({ fetch, url }) {



  return {
    hash: url.pathname
  }
}

export const actions = {

  check: async ({ request }) => {
    try {
      const data = await request.formData();
      const token = process.env.BOT_TOKEN;
      const rawData = data.get('data');
      const result = validateData(token, rawData);
      if (!result)
        return { ok: false, message: 'Invalid hash'};
      return { ok: true, result };
    } catch (err) {
      return {ok: false, message: err.message}
    }

  }
};