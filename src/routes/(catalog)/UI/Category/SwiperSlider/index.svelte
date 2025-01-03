<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	// import '@splidejs/svelte-splide/css/skyblue';
	// import '@splidejs/svelte-splide/css/sea-green';

	// import '@splidejs/svelte-splide/css/core';

	let { data } = $props();
</script>

<Splide aria-label="Проекты">
	{#each data as item}
		<SplideSlide>
			<img
				src={`${import.meta.env.VITE_S3}/catalog/${item.hash}`}
				alt="Выполненный проект"
				class="h-96 w-full object-contain"
			/>
		</SplideSlide>
	{/each}
</Splide>
