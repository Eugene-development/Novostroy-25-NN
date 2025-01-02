/** @type {import('./$types').PageServerLoad} */
import { request } from 'graphql-request';
import { CATALOG } from './query';

export async function load({ params, url }) {
	const urlCRUD = import.meta.env.VITE_URL;
	const key = import.meta.env.VITE_KEY;

	
	const variables = {
		key,
		slug: params.slug
	};

	

	const slugLength = params.slug.length;

	// slug.length === 1 ? isCatalog = true : isCatalog = false;

// console.log(url.pathname);
const segments = url.pathname.split('/').filter(segment => segment.length > 0)

// console.log(segments.length);

    let isCatalog, isCategory, isProduct;

	switch (segments.length) {
	  case 1:
		// Вызов API-роута для каталога
		try {
			const req = await request(urlCRUD, CATALOG, variables);
			return {
				req,
				isCatalog: true
			};
		} catch (error) {
			console.log(error);
		}
		
		
		break;
  
	  case 2:
		// Вызов API-роута для продукта
		
		isProduct = true;
		break;
  
	  case 3:
		// Вызов API-роута для категории
		
		isCategory = true;
		break;
  
	//   default:
	// 	notFound();
	}
  


	
}
