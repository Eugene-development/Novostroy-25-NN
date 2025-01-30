<script>
	import { DropdownMenu } from 'bits-ui';
	import { visibleMobileMenu } from '$lib/state/visibleMobileMenu.svelte';

	let { rubric } = $props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<span
			class="my-1 ml-10 flex w-full rounded-lg bg-gray-50 p-2 text-base/7 font-semibold text-gray-900"
		>
			{rubric.value}
		</span>
	</DropdownMenu.Trigger>

	<DropdownMenu.Content
		class="w-full max-w-[229px] rounded-xl border-2 border-gray-200 bg-gray-100 py-1.5 shadow-xl outline-none"
	>
		{#each rubric.category as category}
			<a onclick={() => (visibleMobileMenu.value = false)} href="/{rubric.parentable.slug}/{rubric.slug}/{category.slug}">
				<DropdownMenu.Item
					class="rounded-button flex h-10 select-none items-center px-6 py-3 text-sm font-medium outline-none data-[highlighted]:bg-muted"
				>
					{category.value}
				</DropdownMenu.Item>
			</a>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
