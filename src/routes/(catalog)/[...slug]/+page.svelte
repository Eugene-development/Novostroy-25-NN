<script>
	/** @type {{ data: import('./$types').PageData }} */

	import { Rubric, Category, Product } from '../UI';

	let { data } = $props();

	$inspect(data);
</script>

<Rubric data={data.req.catalog} />
