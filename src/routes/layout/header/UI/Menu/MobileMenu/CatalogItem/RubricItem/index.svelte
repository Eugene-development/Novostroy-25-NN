<script>
	import { DropdownMenu } from 'bits-ui';

	// import { showRubricMenu } from '$lib/state/showRubricMenu.svelte';

	let { rubric } = $props();
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>
        <span
            class="ml-10 flex w-full rounded-lg p-2 my-1 text-base/7 font-semibold text-gray-900 bg-gray-50"
        >
            {rubric.value}
        </span>
    </DropdownMenu.Trigger>

    <DropdownMenu.Content
        class="w-full max-w-[229px] rounded-xl border-gray-200 border-2 bg-gray-50 py-1.5  shadow-xl outline-none"
    >
        {#each rubric.category as category}
            <a href="/" class="">
                <DropdownMenu.Item
                    class="rounded-button  flex h-10 select-none items-center px-6 py-3 text-sm font-medium outline-none data-[highlighted]:bg-muted"
                >
                    {category.value}
                </DropdownMenu.Item>
            </a>
        {/each}
    </DropdownMenu.Content>
</DropdownMenu.Root>