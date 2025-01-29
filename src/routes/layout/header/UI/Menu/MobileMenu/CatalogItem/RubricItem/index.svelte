<script>
	import { DropdownMenu } from 'bits-ui';

	// import { showRubricMenu } from '$lib/state/showRubricMenu.svelte';

	let { rubric } = $props();
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>
        <span
            class="ml-10 flex w-full rounded-lg px-1 py-2 pr-3.5 text-base/7 font-semibold text-red-700 hover:bg-gray-50"
        >
            {rubric.value}
        </span>
    </DropdownMenu.Trigger>

    <DropdownMenu.Content
        class="w-full max-w-[229px] rounded-xl border border-muted bg-gray-50 py-1.5  shadow-xl outline-none"
    >
        {#each rubric.category as category}
            <a href="/" class="hover:bg-gray-200">
                <DropdownMenu.Item
                    class="rounded-button flex h-10 select-none items-center px-6 py-3 text-sm font-medium outline-none data-[highlighted]:bg-muted"
                >
                    {category.value}
                </DropdownMenu.Item>
            </a>
        {/each}
    </DropdownMenu.Content>
</DropdownMenu.Root>