/** @type {import('./$types').PageServerLoad} */
import { request } from 'graphql-request';
import { SIDEBAR } from './query';

export async function load({ params }) {
	const url = import.meta.env.VITE_URL;
	const key = import.meta.env.VITE_KEY;

	const variables = {
		key,
		slug: params.slug
	};

	try {
		const req = await request(url, SIDEBAR, variables);
		return {
			req
		};
	} catch (error) {
		console.log(error);
	}
}
