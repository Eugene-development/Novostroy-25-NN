<script lang="ts">
	import { getContext } from 'svelte';

	const is = getContext('is');
</script>

{#if is}
	<div class="bg-green-500 p-4 text-white">Target is intersecting</div>
{:else}
	<div class="bg-red-500 p-4 text-white">Target is not intersecting</div>
{/if}
