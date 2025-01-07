<script>
	import { IsMounted } from 'runed';
    import { PersistedState } from "runed";
    import { browser } from '$app/environment';
    import { setContext, getContext } from 'svelte';

    import RemoveButton from './RemoveButton/index.svelte';


	const isMounted = new IsMounted();

    const favorites = new PersistedState("favorites");

    $inspect(favorites.current);

	setContext('currentFavorites', favorites.current);

    const currentFavorites = getContext('currentFavorites');

    $inspect(currentFavorites);
</script>

{#if browser && currentFavorites.length > 0}
	<section class="bg-gray-50 py-8 antialiased md:py-16 ">
		<div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
			<div class="mb-4 flex items-center justify-between gap-4 md:mb-8">
				<h2 class="text-xl font-semibold text-gray-900 sm:text-2xl ">Избранное</h2>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
				{#each currentFavorites as item }
					<div
						class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm "
					>
						<img
							class="mx-auto mb-4 h-[20rem] rounded-lg object-contain md:mb-6 "
							src={`${import.meta.env.VITE_S3}/catalog/${item?.image[0]?.hash}`}
							alt={item.value}
						/>

						<a
							href={`/${item.parentable.parentable.parentable.slug}/${item.parentable.parentable.slug}/${item.parentable.slug}`}
							class="-ml-1 me-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-gray-800"
						>
							<span class="font-bold">Каталог: </span>&nbsp;
							{item.parentable.parentable.value} / {item.parentable.value}
						</a>

						<span class="my-4 block h-16 rounded-lg bg-gray-50 px-2 py-1 font-medium text-gray-900">
							{item.value}
						</span>

						<div class="mt-8 flex justify-between space-x-12">
							<a
								href={`/${item.parentable.parentable.parentable.slug}/${item.parentable.parentable.slug}/${item.parentable.slug}/${item.slug}`}
								title=""
								class=" inline-flex items-center gap-1.5 font-medium text-sky-700 hover:text-sky-600 "
							>
								Подробнее
								<svg
									class="h-5 w-5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M19 12H5m14 0-4 4m4-4-4-4"
									></path>
								</svg>
							</a>

                            <RemoveButton data={item.id} />

							
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{:else}
	<section class="bg-gray-50 py-8 antialiased md:py-16 ">
		<div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
			<div class="mb-4 flex items-center justify-between gap-4 md:mb-8">
				<h2 class="text-xl font-semibold text-gray-900 sm:text-2xl ">Избранное</h2>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
				В разделе пока пусто
			</div>
		</div>
	</section>
{/if}
