<script>
	/** @type {{ data: import('./$types').PageData }} */

	let { data } = $props();

	$inspect(data);
</script>

<div class="bg-white">
	<div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
		<div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
			<!-- Image gallery -->
			<div class="flex flex-col-reverse">
				<!-- Image selector -->
				<div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
					<div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
						<button
							id="tabs-1-tab-1"
							class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-indigo-500/50 focus:ring-offset-4"
							aria-controls="tabs-1-panel-1"
							role="tab"
							type="button"
						>
							<span class="sr-only">Angled view</span>
							<span class="absolute inset-0 overflow-hidden rounded-md">
								<img
									src={`${import.meta.env.VITE_S3}/catalog/${data.image[0].hash}`}
									alt=""
									class="size-full object-contain"
								/>
							</span>
							<!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" -->
							<span
								class="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2"
								aria-hidden="true"
							></span>
						</button>

						<!-- More images... -->
					</div>
				</div>

				<div>
					<!-- Tab panel, show/hide based on tab state. -->
					<div
						id="tabs-1-panel-1"
						aria-labelledby="tabs-1-tab-1"
						role="tabpanel"
						tabindex="0"
						class="aspect-w-15 aspect-h-10 scale110 w-full cursor-pointer"
					>
						<img
							src={`${import.meta.env.VITE_S3}/catalog/${data.image[0].hash}`}
							alt="Angled front view with bag zipped and handles upright."
							class=" w-full object-contain sm:rounded-lg"
						/>
					</div>

					<!-- More images... -->
				</div>
			</div>

			<!-- Product info -->
			<div class="mt-10 px-4 sm:mt-16 lg:mt-0">
				<h1 class="text-3xl font-bold tracking-tight text-gray-900">{data.value}</h1>

				<div class="mt-3">
					<h2 class="sr-only">{data.parentable.value}</h2>
					<a
						href="/{data.parentable.parentable.parentable.slug}/{data.parentable.parentable
							.slug}/{data.parentable.slug}"
						class="text-xl tracking-tight text-gray-900">{data.parentable.value}</a
					>
				</div>

				<!-- Reviews -->
				<div class="mt-3">
					<h3 class="sr-only">Reviews</h3>
					<div class="flex items-center">
						<div class="flex items-center">
							<svg
								class="size-5 shrink-0 text-red-600"
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
								class="size-5 shrink-0 text-red-600"
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
								class="size-5 shrink-0 text-red-600"
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
								class="size-5 shrink-0 text-red-600"
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
								class="size-5 shrink-0 text-red-600"
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

				<div class="mt-6">
					<h3 class="sr-only">Description</h3>

					<div class="space-y-6 text-base text-gray-700">
						<p>
							Наш дизайнер бесплатно даст вам общую консультацию по интересующим вас вопросам,
							связанным с проектированием мебели и условиям нашей работы.
						</p>
						<p>
							Мы дадим советы по выбору материалов и цветов и составим для вас стартовый
							дизайн-проект.
						</p>
					</div>
				</div>

				<form class="mt-6">
					<div class="mt-10 flex">
						<button
							type="submit"
							class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
							>Добавьте в избранное</button
						>

						<button
							type="button"
							class="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
						>
							<svg
								class="size-6 shrink-0"
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
