<script lang="ts">
	import { getContext } from 'svelte';

	const is2 = getContext('is2');
</script>

{#if is2}
	<div class="bg-blue-500 p-4 text-white">Второй блок виден</div>
{:else}
	<div class="bg-yellow-500 p-4 text-white">Второй блок скрыт</div>
{/if}
