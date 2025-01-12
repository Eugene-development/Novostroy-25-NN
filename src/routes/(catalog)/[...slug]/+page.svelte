<script>
	/** @type {{ data: import('./$types').PageData }} */

	import { Catalog, Rubric, Category, Product } from '../UI';

	let { data } = $props();
</script>

<svelte:head>
	{#if data.isCatalog}
		<title>{data.req.catalog.metaTitle.value}</title>
		<meta name="description" content={data.req.catalog.metaDescription.value} />
	{:else if data.isRubric}
		<title>{data.req.rubric.metaTitle.value}</title>
		<meta name="description" content={data.req.rubric.metaDescription.value} />
	{:else if data.isCategory}
		<title>{data.req.category.metaTitle.value}</title>
		<meta name="description" content={data.req.category.metaDescription.value} />
	{:else if data.isProduct}
		<title>Новострой | {data.req.product.value}</title>
		<meta
			name="description"
			content="{data.req.product.value} подбирается из категории {data.req.product.parentable
				.value} с учётом ваших пожеланий, чтобы создать уют и комфорт в соответствии с вашим дизайн-проектом."
		/>
	{/if}
</svelte:head>

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
