<script>
	/** @type {{ data: import('./$types').PageData }} */

	import { Rubric, Category, Product } from '../UI';

	let { data } = $props();
	$inspect(data);
</script>

<main class="h-full flex-1 overflow-y-auto py-3 lg:pl-4">
	<Rubric data={data.req.catalog} />
</main>
