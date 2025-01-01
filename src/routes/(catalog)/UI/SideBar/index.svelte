<script>
	// import { Search } from "@/UI";
	import Designer from './Designer/index.svelte';
	import CallToAction from './CallToAction/index.svelte';
	import SidebarMenu from './SidebarMenu/index.svelte';

	const sidebarClasses =
		'fixed top-0 left-0 z-40 lg:z-0 w-72 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 lg:block lg:relative lg:h-auto lg:rounded-lg lg:border-r-0';
	const containerClasses = 'overflow-y-auto py-1 px-3 h-full bg-white lg:rounded-lg';
</script>

<aside id="sidebar" class={sidebarClasses} aria-label="Sidebar">
	<!-- <Search />  -->

	<div class={containerClasses}>
		<Designer />

		<CallToAction />

		<SidebarMenu />


	</div>
</aside>
