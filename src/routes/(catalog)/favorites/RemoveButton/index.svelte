<script>
    import { PersistedState } from "runed";

    const favorites = new PersistedState("favorites");

    let { data } = $props();

    $inspect(favorites.current);


</script>

<button
    onclick={() => {
        console.log(data);
        favorites.current = favorites.current.filter((item) => item.id !== data);
    }}
    type="button"
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
