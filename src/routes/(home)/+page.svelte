<script>
	import { setContext } from 'svelte';
	import { useIntersectionObserver } from 'runed';
	import { Main, Incentives, Offer, Stage } from './UI';

	let target = $state(null);
	let root = $state(null);
	let isIntersecting = $state(false);
	$inspect(isIntersecting);


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

<svelte:head>
	<title>Главная</title>
	<meta name="description" content="Главная" />
</svelte:head>

<div bind:this={root} class="h-screen overflow-auto">
	<Main />
	<Incentives />
	<!-- <Offer /> -->
	<div bind:this={target}>
		<Stage />
	</div>
</div>
