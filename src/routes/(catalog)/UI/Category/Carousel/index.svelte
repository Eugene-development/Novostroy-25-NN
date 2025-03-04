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
					class="flex  items-center justify-center object-contain"
				/>
			</Carousel.Item>
		{/each}
	</Carousel.Content>

	<Carousel.Previous class="ml-8" />
	<Carousel.Next class="mr-8" />
</Carousel.Root>




<!-- <script>
    import * as Carousel from '$lib/components/ui/carousel/index.js';
    import { onMount } from 'svelte';

    let { data } = $props();

    // Функция для определения аспект-соотношения
    function setAspectRatio(event) {
        const img = event.target;
        if (img.naturalWidth > img.naturalHeight) {
            img.classList.add('aspect-[4/3]');
            img.classList.remove('aspect-[3/4]');
        } else {
            img.classList.add('aspect-[3/4]');
            img.classList.remove('aspect-[4/3]');
        }
    }
</script>

<Carousel.Root class="w-full">
    <Carousel.Content>
        {#each data as item, i (i)}
            <Carousel.Item>
                <img
                    src={`${import.meta.env.VITE_S3}/catalog/${item.hash}`}
                    alt="Выполненный проект"
                    class="flex items-center justify-center"
                    onload={setAspectRatio}
                />
            </Carousel.Item>
        {/each}
    </Carousel.Content>

    <Carousel.Previous class="ml-8" />
    <Carousel.Next class="mr-8" />
</Carousel.Root> -->