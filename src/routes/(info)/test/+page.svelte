<!-- <script lang="ts">
	import { PersistedState } from 'runed';

	const count = new PersistedState('count', 0);
</script>

<div>
	<button onclick={() => count.current++}>Increment</button>
	<button onclick={() => count.current--}>Decrement</button>
	<button onclick={() => (count.current = 0)}>Reset</button>
	<p>Count: {count.current}</p>
</div> -->

<script>
	import { ArrowUp } from 'lucide-svelte';
</script>
	
	<ArrowUp />
	<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up fill-orange-600"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>	
   
	<ArrowUp size={48} strokeWidth={1.5} absoluteStrokeWidth />