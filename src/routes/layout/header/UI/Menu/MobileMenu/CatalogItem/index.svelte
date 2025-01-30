<script>
	import { DropdownMenu } from 'bits-ui';

	import RubricItem from './RubricItem/index.svelte';

	let showRubricMenu = $state(false);

	let { catalog } = $props();
</script>

<button
	type="button"
	onclick={() => (showRubricMenu = !showRubricMenu)}
	class="ml-5 flex w-full justify-between rounded-lg px-1 py-2 pr-7 text-base/7 font-semibold hover:bg-gray-50"
>
	{catalog.value}

	<svg
		class="size-5 flex-none {showRubricMenu ? 'rotate-180 text-sky-700' : ''}"
		viewBox="0 0 20 20"
		fill="currentColor"
		aria-hidden="true"
		data-slot="icon"
	>
		<path
			fill-rule="evenodd"
			d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
			clip-rule="evenodd"
		/>
	</svg>
</button>

{#if showRubricMenu}
	<div class="flex flex-col">
		{#each catalog.rubric as rubric}
			<RubricItem {rubric} />
		{/each}
	</div>
{/if}
