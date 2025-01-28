/** @type {import('./$types').PageServerLoad} */
import { request } from 'graphql-request';
import { CATALOG_TREE } from '$lib/query';

export async function load({ url }) {
	const urlCRUD = import.meta.env.VITE_URL;
	const key = import.meta.env.VITE_KEY;

	const variables = {
		key
	};

	try {
		const req = await request(urlCRUD, CATALOG_TREE, variables);
		return {
			req
		};
	} catch (error) {
		console.log(error);
	}
}
