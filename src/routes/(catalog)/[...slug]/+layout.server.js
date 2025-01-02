/** @type {import('./$types').PageServerLoad} */
import { request } from 'graphql-request';
import { SIDEBAR } from './query';

export async function load({ url }) {
	const urlCRUD = import.meta.env.VITE_URL;
	const key = import.meta.env.VITE_KEY;
	const segments = url.pathname.split('/').filter((segment) => segment.length > 0);

	const variables = {
		key,
		slug: segments[0]
	};

	try {
		const req = await request(urlCRUD, SIDEBAR, variables);
		return {
			req
		};
	} catch (error) {
		console.log(error);
	}
}
