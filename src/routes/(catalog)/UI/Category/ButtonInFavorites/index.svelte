<script>
    import { isFavorites } from '$lib/state/favorites.svelte';
    import { PersistedState } from 'runed';

    const favorites = new PersistedState('favorites', []);

    let favoritesList = $state(favorites.current);

    $effect(() => {
        favoritesList = favorites.current;
        favoritesList.length > 0 ? (isFavorites.value = true) : (isFavorites.value = false);
    });


    

    

    
    
    let { item } = $props();
    let itemInFavorites = $state(favorites.current.some((i) => i.id === item.id));

    const toggleFavorite = (item) => {
        favorites.current = favorites.current.some(i => i.id === item.id)
            ? favorites.current.filter(i => i.id !== item.id)
            : [...favorites.current, item];
        
        itemInFavorites = favorites.current.some(i => i.id === item.id);
    };


    
    </script>




<button
    type="button"
    onclick={() => toggleFavorite(item)}
    class="mb-3 flex w-full items-center justify-center rounded-lg border bg-white px-5 py-2.5 text-sm font-medium focus:z-10 focus:outline-none focus:ring-4 {itemInFavorites
        ? 'border-red-700 text-red-900 hover:bg-red-100 hover:text-red-700 focus:ring-red-300'
        : 'border-gray-200 text-gray-900 hover:bg-gray-100 hover:text-sky-700 focus:ring-gray-100'}"
    >
    <svg
        class="mr-1 h-5 w-5 {itemInFavorites
            ? 'fill-red-700'
            : 'fill-none'}"
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
        ></path>
    </svg>
    {#if itemInFavorites}<span class="">В избранном</span>
    {:else}<span class="">Добавьте в избранное</span>
    {/if}
</button>
