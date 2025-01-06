<script lang="ts">
	import { setContext } from 'svelte';
	import { useIntersectionObserver } from "runed";
	import IntersectionBlock from './IntersectionBlock.svelte';
	import DeploySection from './DeploySection.svelte';
 
	let target = $state<HTMLElement | null>(null);
	let root = $state<HTMLElement | null>(null);
 
	let isIntersecting = $state(false);
	$inspect(isIntersecting);

	// Передача контекста
	setContext('is', () => isIntersecting);
 
	useIntersectionObserver(
		() => target,
		(entries) => {
			const entry = entries[0];
			if (!entry) return;
			isIntersecting = entry.isIntersecting;
		},
		{ 
			root: () => root,
			threshold: 0.9,
			rootMargin: '0px'
		}
	);
</script>

<div bind:this={root} class="h-screen overflow-auto">
	<DeploySection />
	
	<div bind:this={target} >
		<IntersectionBlock />
	</div>
</div>
