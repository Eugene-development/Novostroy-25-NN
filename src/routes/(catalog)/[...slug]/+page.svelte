<script>
	/** @type {{ data: import('./$types').PageData }} */

	import { Rubric, Category, Product } from '../UI';

	let { data } = $props();

</script>

<Rubric data={data.req.catalog} />
