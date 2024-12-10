/** @type {import('./$types').PageServerLoad} */
import { request } from 'graphql-request';
import { CATALOG } from './query';

export async function load() {

    const url = 'https://crud.novostroy.org/graphql/'
    const variables = {
        key: '7eb340c2-9795-4d70-a081-aa1a0ec94a84',
        slug: 'mebel'
      };


      const data = await request(url, CATALOG, variables);
    
	return {
		data
	};
}