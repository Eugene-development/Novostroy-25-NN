<script>
	let { data } = $props();

	// $inspect(data);

	const parentable = data?.parentable || {};
	const grandParent = parentable.parentable?.parentable || {};
	const parent = parentable?.parentable || {};
</script>

<div class="inline-flex space-x-0 whitespace-pre">
	<span
		class="mr-2 hidden rounded-full bg-gray-50/50 px-4 py-0.5 text-xs font-semibold leading-6 text-gray-600 ring-1 ring-inset ring-sky-400/10 sm:block"
	>
		Каталог
	</span>

	<span class="inline-flex items-center space-x-0 text-xs font-medium leading-6 text-gray-600">
		<!-- ПраПраРодитель  -->
		{#if grandParent}
			<a href={`/{$grandParent.slug}`} class="flex hover:text-sky-700">
				<span>{grandParent.value}</span>
				<!-- <ChevronRightIcon aria-hidden="true" class="size-6 text-gray-400" /> -->
			</a>
		{/if}

		<!--  ПраРодитель  -->
		{#if parent?.slug}
			{#if parent?.parentable}
				<span>{parent.value}</span>
				<!-- <ChevronIcon /> -->
			{:else}
				<a href={`/{$parent.slug}`} class="flex hover:text-sky-700">
					<span>{parent.value}</span>
					<!-- <ChevronRightIcon aria-hidden="true" class="size-6 text-gray-400" /> -->
				</a>
			{/if}
		{/if}

		<!--  Родитель  -->
		{#if parentable.slug}
			<a
				href={`/{$grandParent?.slug}/{$parent.slug}/{$parentable.slug}`}
				class="flex hover:text-sky-700"
			>
				<span>{grandParent.value}</span>
				<!-- <ChevronRightIcon aria-hidden="true" class="size-6 text-gray-400" /> -->
			</a>
		{:else}
			<span>{parentable.value}</span>
			{#if parent}
				<!-- <ChevronIcon />  -->
			{/if}
		{/if}

		<!-- Значение  -->
		<!-- {#if !grandParent} -->
		<span>{data?.value}</span>
		<!-- {/if}111 -->
	</span>
</div>
