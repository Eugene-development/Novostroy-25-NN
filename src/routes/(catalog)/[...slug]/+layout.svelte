<script>
	/** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
	let { children } = $props();

	import { SideBar } from '../UI';
</script>

<div class="antialised">
	<!-- <Info /> -->
	<!-- <Badge />   -->

	<div class="relative mx-auto flex h-full w-full max-w-full px-4 py-1">
		<SideBar />
		<!-- <SideBar dataCatalog={data.catalog} /> -->
		{@render children()}
	</div>
</div>
