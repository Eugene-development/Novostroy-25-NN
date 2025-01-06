<script lang="ts">
	import { setContext } from 'svelte';
	import { useIntersectionObserver } from 'runed';
	import IntersectionBlock from './IntersectionBlock.svelte';
	// import IntersectionBlock2 from './IntersectionBlock2.svelte';
	import DeploySection from './DeploySection.svelte';

	let target = $state<HTMLElement | null>(null);
	let target2 = $state<HTMLElement | null>(null);
	let root = $state<HTMLElement | null>(null);

	let isIntersecting = $state(false);
	let isIntersecting2 = $state(false);
	$inspect('sss:', isIntersecting);
	// $inspect('sss2:', isIntersecting2);

	// Передача контекста
	setContext('is', () => isIntersecting);
	setContext('is2', () => isIntersecting2);

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

	useIntersectionObserver(
		() => target2,
		(entries) => {
			const entry = entries[0];
			if (!entry) return;
			isIntersecting2 = entry.isIntersecting;
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
	<div class="h-[50vh]"></div>

	<div bind:this={target}>
		<IntersectionBlock />
	</div>

	<div class="h-[50vh]"></div>

	<!-- <div bind:this={target2}>
		<IntersectionBlock2 />
	</div> -->
</div>
