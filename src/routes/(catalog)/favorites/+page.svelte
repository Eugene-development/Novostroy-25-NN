<script>
    import { browser } from '$app/environment';
    import { PersistedState } from "runed";
    import RemoveButton from './RemoveButton/index.svelte';

    const favorites = new PersistedState("favorites", []);

</script>

{#if browser && favorites.current.length > 0}
    <section class="bg-gray-50 py-8 antialiased md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div class="mb-4 flex items-center justify-between gap-4 md:mb-8">
                <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl">
                    Избранное ({favorites.current.length})
                </h2>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                {#each favorites.current as item (item.id)}
                    <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <img
                            class="mx-auto mb-4 h-[20rem] rounded-lg object-contain md:mb-6"
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
                                class="inline-flex items-center gap-1.5 font-medium text-sky-700 hover:text-sky-600"
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
                                    />
                                </svg>
                            </a>

                            <button
                                type="button"
                                onclick={() => favorites.current = favorites.current.filter((i) => i.id !== item.id)}
                                class="flex w-full items-center justify-center rounded-lg border border-gray-700 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-300"
                            >
                                <svg
                                    class="-ms-2 me-2 h-5 w-5 fill-red-700"
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
                                <span>Убрать</span>
                            </button>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>
{:else}
    <section class="bg-gray-50 py-8 antialiased md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div class="mb-4 flex items-center justify-between gap-4 md:mb-8">
                <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl">Избранное</h2>
            </div>

            <div class="flex min-h-[50vh] items-center justify-center">
                <p class="text-xl text-gray-500">В избранном пока ничего нет</p>
            </div>
        </div>
    </section>
{/if}
