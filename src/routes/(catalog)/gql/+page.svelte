<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();

    $inspect(data);
</script>

<p>{data.data.catalog.value}</p>