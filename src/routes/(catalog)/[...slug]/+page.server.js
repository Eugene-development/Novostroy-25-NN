/** @type {import('./$types').PageServerLoad} */
import { request } from 'graphql-request';
import { CATALOG } from './query';

export async function load({ params }) {
	const url = import.meta.env.VITE_URL;
	const key = import.meta.env.VITE_KEY;

	const variables = {
		key,
		slug: params.slug
	};

	const req = await request(url, CATALOG, variables);

	return {
		req
	};
}
