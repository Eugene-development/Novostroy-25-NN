<script>
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	let { data } = $props();
</script>

<Carousel.Root class="w-full">
	<Carousel.Content>
		{#each data as item, i (i)}
			<Carousel.Item>
				<img
					src={`${import.meta.env.VITE_S3}/catalog/${item.hash}`}
					alt="Выполненный проект"
					class="flex aspect-[4/3] items-center justify-center"
				/>
			</Carousel.Item>
		{/each}
	</Carousel.Content>

	<Carousel.Previous class="ml-8" />
	<Carousel.Next class="mr-8" />
</Carousel.Root>
