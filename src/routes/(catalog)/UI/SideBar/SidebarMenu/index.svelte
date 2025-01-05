<script>
	import { page } from '$app/state';

	let { data } = $props();

	const segmentsURL = page.url.pathname.split('/').filter((segment) => segment.length > 0);

	let lastElement = segmentsURL.slice(-1)[0];
	const secondToLast = segmentsURL.slice(-2)[0];

	// $effect(() => {lastElement = segmentsURL.slice(-1)[0]})

	// 	if (segmentsURL.length >= 2) {
	//     const lastElement = segmentsURL[segmentsURL.length - 1];
	//     const secondToLast = segmentsURL[segmentsURL.length - 2];
	// }

	$inspect(lastElement);
</script>

<ul class="mb-6 space-y-3 rounded-xl border border-gray-50/50 bg-gray-50/20 px-3 py-6">
	{#each data.rubric as item (item.value)}
		<li>
			<div
				class="group flex w-full items-center rounded-lg border border-gray-50 bg-gray-100/20 py-2 text-base font-semibold tracking-wide text-gray-900 transition duration-75 hover:bg-gray-100"
			>
				<span class="ml-3 flex-1 whitespace-nowrap text-left">
					{item.value}
				</span>
			</div>

			{#each item.category as subitem (subitem.value)}
				<ul id="dropdown-orders" 
				class={secondToLast === subitem.slug || lastElement === subitem.slug
					? 'space-y-2 p-2 *:text-sky-600 '
					: 'space-y-2 p-2 *:text-gray-900'}
				>
					<li class="flex items-center rounded-lg">
						<a
							href={`/${data.slug}/${item.slug}/${subitem.slug}`}
							class="group flex w-full items-center justify-between rounded-lg p-1 pl-4 text-sm font-medium tracking-wide  transition duration-75 hover:bg-gray-100 hover:text-sky-600"
						>
							{subitem.value}
							<span
								class="inline-flex h-5 w-5 items-center rounded-full text-xs font-semibold "
								>{subitem.product_count}</span
							>
						</a>
					</li>
				</ul>
			{/each}
		</li>
	{/each}

	
</ul>

<ul class="space-y-2 border-t border-gray-200 py-6">
	<li>
		<a
			href="/actions"
			class="group flex items-center rounded-lg p-1 text-sm font-normal tracking-wide text-gray-900 hover:bg-gray-50"
		>
			<span class="ml-3 flex-1 whitespace-nowrap">Акции</span>
		</a>
	</li>
	<li>
		<a
			href="/contacts"
			class="group flex items-center rounded-lg p-1 text-sm font-normal tracking-wide text-gray-900 hover:bg-gray-50"
		>
			<span class="ml-3 flex-1 whitespace-nowrap">Контакты</span>
		</a>
	</li>
	<li>
		<a
			href="/favorites"
			class="group flex items-center rounded-lg p-1 text-sm font-normal tracking-wide text-gray-900 hover:bg-gray-50"
		>
			<span class="ml-3 flex-1 whitespace-nowrap">Избранное</span>
		</a>
	</li>
</ul>

<div class="border-t border-gray-200 py-6">
	<a
		href="/"
		class="group flex items-center rounded-lg p-1 text-sm font-normal text-sky-800 hover:bg-gray-50"
	>
		<svg
			class="h-6 w-6 flex-shrink-0 text-sky-800 transition duration-75"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				clipRule="evenodd"
				fillRule="evenodd"
				d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
			></path>
		</svg>
		<span class="ml-3 flex-1 whitespace-nowrap">На главную</span>
	</a>
</div>
