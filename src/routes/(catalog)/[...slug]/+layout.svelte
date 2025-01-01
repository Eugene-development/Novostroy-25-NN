<script>
	/** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
	let { children, data } = $props();

	import { SideBar } from '../UI';
</script>

<div class="antialised">
	<!-- <Info /> -->
	<!-- <Badge />   -->

	<div class="relative mx-auto flex h-full w-full max-w-full px-4 py-1">
		<SideBar data={data.req.catalog} />
		<!-- <SideBar dataCatalog={data.catalog} /> -->
		{@render children()}
	</div>
</div>
