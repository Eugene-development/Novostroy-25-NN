<script>
	/** @type {{ data: import('./$types').PageData }} */
	import SwiperSlider from './SwiperSlider/index.svelte';
	import { PersistedState } from 'runed';
	const favorites = new PersistedState('favorites', []);

	let { data } = $props();
	// $inspect(data);
</script>

<div class="bg-white py-2 sm:py-4">
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<p class="text-xl/7 font-semibold text-sky-600">{data.parentable.value}</p>
			<h2 class="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
				{data.value}
			</h2>
			<!-- <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p> -->
		</div>
	</div>
</div>

<!-- {data.value} -->
<div class="grid gap-4 sm:mt-4 sm:grid-cols-2 lg:grid-cols-3">
	{#each data.product as item (item.slug)}
		<div
			class="animate-fade-up rounded-lg border border-gray-100 bg-gray-50/10 p-6 shadow-sm animate-delay-700 animate-duration-1000 animate-ease-in-out"
		>
			<div class="">
				<!-- Carousel wrapper -->
				<div class="mb-4 rounded-lg">
					<SwiperSlider data={item.image} />
				</div>
			</div>

			<div class="h-11">
				<a
					href="/{data.parentable.parentable.slug}/{data.parentable.slug}/{data.slug}/{item.slug}"
					class="text-xl font-semibold leading-tight text-gray-900 hover:underline"
				>
					{item.value}
				</a>
			</div>

			<button
				type="button"
				class="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-sky-700 hover:underline"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-5 text-gray-700 hover:text-sky-700"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
					/>
				</svg>
				Узнайте актуальную цену
			</button>

			<div class="mx-auto mt-4 max-w-sm sm:flex sm:items-center md:mt-6 lg:flex-col">
				<button
					type="button"
					onclick={() => (favorites.current = [...favorites.current, item])}
					class={`flex w-full items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-medium focus:z-10 focus:outline-none focus:ring-4 ${
						true
							? 'border-red-700 bg-white text-red-900 hover:bg-red-100 hover:text-red-700 focus:ring-red-300'
							: 'border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-sky-700 focus:ring-gray-100'
					}`}
				>
					<svg
						class={`-ms-2 me-2 h-5 w-5 ${true ? 'fill-red-700' : 'fill-none'}`}
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
						/>
					</svg>
					{#if true}
						<span class="">В избранном</span>
					{:else}
						<span class="">Добавить в избранное</span>
					{/if}
				</button>
			</div>
			<div class=" max-w-sm sm:flex sm:items-center md:mt-6 lg:flex-col">
				<a
					href="/{data.parentable.parentable.slug}/{data.parentable.slug}/{data.slug}/{item.slug}"
					class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:from-blue-600 hover:to-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-300"
				>
					Подробнее
				</a>
			</div>
		</div>
	{/each}
</div>
