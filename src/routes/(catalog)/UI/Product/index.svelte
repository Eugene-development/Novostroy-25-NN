<script>
	/** @type {{ data: import('./$types').PageData }} */

	import { PersistedState } from 'runed';

	const favorites = new PersistedState('favorites', []);

	let currentImageIndex = $state(0);

	function setNewImageIndex(i) {
		currentImageIndex = i;
	}

	let { data } = $props();

	const toggleFavorite = () => {
		const isInFavorites = favorites.current.some(item => item.id === data.id);
		if (isInFavorites) {
			favorites.current = favorites.current.filter((i) => i.id !== data.id);
		} else {
			favorites.current = [...favorites.current, data];
		}
	};

	// $inspect(data);
</script>

<div class="animate-fade-up bg-white animate-delay-700 animate-duration-1000 animate-ease-in-out">
	<div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
		<div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
			<!-- Image gallery -->
			<div class="flex flex-col-reverse">
				<!-- Image selector -->
				<div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
					<div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
						{#each data.image as image, i}
							<button
								onclick={() => setNewImageIndex(i)}
								id="tabs-1-tab-1"
								class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-indigo-500/50 focus:ring-offset-4"
								aria-controls="tabs-1-panel-1"
								role="tab"
								type="button"
							>
								<span class="sr-only">Предпросмотр</span>
								<span
									class="absolute inset-0 overflow-hidden rounded-md border border-gray-200 p-1"
								>
									<img
										src={`${import.meta.env.VITE_S3}/catalog/${image.hash}`}
										alt=""
										class="size-full object-contain"
									/>
								</span>
								<span
									class="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2"
									aria-hidden="true"
								></span>
							</button>
						{/each}
					</div>
				</div>

				<div>
					<!-- Tab panel, show/hide based on tab state. -->
					<div class="aspect-w-15 aspect-h-10 scale110 w-full cursor-pointer">
						<img
							src={`${import.meta.env.VITE_S3}/catalog/${data.image[currentImageIndex].hash}`}
							alt={data.item?.alt}
							class="h-[450px] w-full rounded-lg object-contain object-center"
						/>
					</div>
				</div>
			</div>

			<div class="mt-10 px-4 sm:mt-16 lg:mt-0">
				<div class="mb-3">
					<h2 class="sr-only">{data.parentable.value}</h2>

					<a
						href="/{data.parentable.parentable.parentable.slug}"
						class="text-sm tracking-tight text-gray-900"
					>
						{data.parentable.parentable.parentable.value}</a
					>
					<span class="mx-0.5">/</span>
					<a
						href="/{data.parentable.parentable.parentable.slug}/{data.parentable.parentable.slug}"
						class="text-sm tracking-tight text-gray-900"
					>
						{data.parentable.parentable.value}</a
					>
					<span class="mx-0.5">/</span>
					<a
						href="/{data.parentable.parentable.parentable.slug}/{data.parentable.parentable
							.slug}/{data.parentable.slug}"
						class="text-sm tracking-tight text-gray-900"
					>
						{data.parentable.value}</a
					>
				</div>

				<h1 class="text-4xl font-bold tracking-tight text-gray-900">{data.value}</h1>

				<!-- Reviews -->
				<div class="mt-3">
					<h3 class="sr-only">Reviews</h3>
					<div class="flex items-center">
						<div class="flex items-center *:mx-0.5">
							<svg
								class="size-4 shrink-0 text-red-600"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									fill-rule="evenodd"
									d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
									clip-rule="evenodd"
								/>
							</svg>
							<svg
								class="size-4 shrink-0 text-red-600"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									fill-rule="evenodd"
									d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
									clip-rule="evenodd"
								/>
							</svg>
							<svg
								class="size-4 shrink-0 text-red-600"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									fill-rule="evenodd"
									d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
									clip-rule="evenodd"
								/>
							</svg>
							<svg
								class="size-4 shrink-0 text-red-600"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									fill-rule="evenodd"
									d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
									clip-rule="evenodd"
								/>
							</svg>
							<svg
								class="size-4 shrink-0 text-red-600"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									fill-rule="evenodd"
									d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<p class="sr-only">5 out of 5 stars</p>
					</div>
				</div>

				<div class="mt-8">
					<h3 class="sr-only">Описание</h3>

					<div class="space-y-4 text-base text-gray-700">
						<p>
							Наш дизайнер бесплатно проконсультирует вас по всем интересующим вопросам и расскажет
							об условиях нашего сотрудничества. Мы также предоставим рекомендации по выбору
							фурнитуры, материалов и цветовых решений, а ещё подготовим для вас стартовый
							дизайн-проект.
						</p>
					</div>
				</div>

				<form class="mt-2">
					<div class="mt-10 flex">
						<button
							type="submit"
							class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 hover:from-blue-600 hover:to-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
							>Бесплатная консультация</button
						>
						<button
							onclick={toggleFavorite}
							type="button"
							class="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
						>
							<svg
								class="size-6 shrink-0 {favorites.current.some(item => item.id === data.id) ? 'text-red-500' : 'text-gray-400'}"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
								/>
							</svg>
							<span class="sr-only">Добавьте в избранное</span>
						</button>
					</div>
				</form>

				<button type="button" class="mt-4 flex items-center gap-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						class="h-5 w-5 text-gray-700"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
						/>
					</svg>

					<p class="text-sm font-medium text-gray-700">Запрос актуальной цены</p>
				</button>

				<section aria-labelledby="details-heading" class="mt-12">
					<h2 id="details-heading" class="sr-only">Additional details</h2>

					<div class="divide-y divide-gray-200 border-t">
						<div>
							<h3>
								<div class="group relative flex w-full items-center justify-between py-6 text-left">
									<span class="text-sm font-medium text-gray-900">Теги</span>
								</div>
							</h3>
							<div class="pb-6" id="disclosure-1">
								<ul
									role="list"
									class="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300"
								>
									{#each data.tag as item}
										<li class="pl-2">{item.value}</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</div>
