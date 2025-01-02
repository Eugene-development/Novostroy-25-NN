<script>
	/** @type {{ data: import('./$types').PageData }} */

	import { Rubric, Category, Product } from '../UI';

	let { data } = $props();
	$inspect(data);

</script>

<main class="flex-1 py-3 h-full overflow-y-auto lg:pl-4">
	<Rubric data={data.req.catalog} />
</main>
