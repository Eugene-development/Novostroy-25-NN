/** @type {import('./$types').PageServerLoad} */
import { request } from 'graphql-request';
import { CATALOG } from './query';

export async function load({ params }) {
	const url = import.meta.env.VITE_URL;
	// const url = process.env.VITE_URL;

	const variables = {
		key: '7eb340c2-9795-4d70-a081-aa1a0ec94a84',
		slug: params.slug
	};

	const req = await request(url, CATALOG, variables);

	return {
		req
	};
}
