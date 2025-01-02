<script>
	/** @type {{ data: import('./$types').PageData }} */

	import { Catalog, Rubric, Category, Product } from '../UI';

	let { data } = $props();
</script>

<main class="h-full flex-1 overflow-y-auto py-3 lg:pl-4">
	{#if data.isCatalog}
		<Catalog data={data.req.catalog} />
	{:else if data.isRubric}
		<Rubric data={data.req.rubric} />
	{:else if data.isCategory}
		<Category data={data.req.category} />
	{:else if data.isProduct}
		<Product data={data.req.product} />
	{/if}
</main>
