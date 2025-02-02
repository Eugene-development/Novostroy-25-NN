/** @type {import('./$types').PageServerLoad} */
import axios from 'axios';

export const actions = {
	sendFormMeasurement: async ({ request }) => {
		try {
			const data = await request.formData();
			const url = `/send-form-furniture-project`;
			const urlMAIL = {
				baseURL: import.meta.env.VITE_MAIL,
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_KEY}`
				}
			};
			const variables = {
				name: data.get('client-name'),
				// phone: data.get('client-phone'),
				// email: data.get('client-email'),
				// address: data.get('client-address'),
				// comment: data.get('client-comment')
			};
			await axios.post(url, variables, urlMAIL);
			return { success: true };
		} catch (error) {
			console.error('Error sending form:', error);
			return { success: false, error: error.message };
		}
	}
};
