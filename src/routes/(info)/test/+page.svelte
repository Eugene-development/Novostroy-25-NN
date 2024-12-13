<script lang="ts">
	import { PersistedState } from 'runed';

	const count = new PersistedState('count', 0);
</script>

<div>
	<button onclick={() => count.current++}>Increment</button>
	<button onclick={() => count.current--}>Decrement</button>
	<button onclick={() => (count.current = 0)}>Reset</button>
	<p>Count: {count.current}</p>
</div>
