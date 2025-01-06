<script lang="ts">
	let { data } = $props();
</script>

{#if data.isIntersecting}
	<div class="bg-green-500 p-4 text-white">Target is intersecting</div>
{:else}
	<div class="bg-red-500 p-4 text-white">Target is not intersecting</div>
{/if}
