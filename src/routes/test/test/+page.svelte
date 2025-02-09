<!-- <button class="animate-jump-in animate-duration-100"> Hej, look at me! </button> -->

<!-- <script>
	import { VERSION } from '@sveltejs/kit';

	import { browser, building, dev, version } from '$app/environment';

	$inspect(VERSION);
	$inspect(browser);

	import { ArrowUp } from 'lucide-svelte';

	import { PersistedState } from 'runed';

	const count = new PersistedState('count', 0);
</script>

<div>
	<button onclick={() => count.current++}>Increment</button>
	<button onclick={() => count.current--}>Decrement</button>
	<button onclick={() => (count.current = 0)}>Reset</button>
	<p>Count: {count.current}</p>
</div>

{#key count.current}
	<div transition:fade>{count.current}</div>
{/key}

{#key count.current}
	<div transition:fade><ArrowUp size={count.current} strokeWidth={1.5} absoluteStrokeWidth /></div>
{/key} -->

<!-- {VERSION} -->

<!-- <ArrowUp />
<svg
	xmlns="http://www.w3.org/2000/svg"
	width="48"
	height="48"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="0.75"
	stroke-linecap="round"
	stroke-linejoin="round"
	class="lucide lucide-arrow-up fill-orange-600"
	><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg
>

<ArrowUp size={48} strokeWidth={1.5} absoluteStrokeWidth /> -->

<script lang="ts">
	import { useIntersectionObserver } from 'runed';
	// import { Checkbox, Label, DemoContainer } from "@svecodocs/kit";

	let root = $state<HTMLElement>(null!);
	let target = $state<HTMLElement>(null!);

	let isVisible = $state(false);

	const observer = useIntersectionObserver(
		() => target,
		([entry]) => {
			if (entry) {
				isVisible = entry.isIntersecting;
			} else {
				isVisible = false;
			}
		},
		{
			root: () => root
		}
	);
</script>

<div class="flex flex-col gap-4 text-center">
	<div class="flex items-center justify-center">
		<!-- <Checkbox
			id="enabled"
			checked={observer.isActive}
			onCheckedChange={(v) => {
				if (v) {
					observer.resume();
				} else {
					observer.pause();
				}
			}}
		/> -->
		<!-- <Label for="enabled" class="pl-2">Enable</Label> -->
	</div>
	<div
		bind:this={root}
		class="m-2 h-[200px] overflow-y-scroll border-2 border-dashed border-border pt-4"
	>
		<p class="text-lg italic">Scroll down 👇</p>
		<div bind:this={target} class="border-brand m-6 mt-96 max-h-[150px] border-2 p-2.5">
			<p>I'm the target! 🎯</p>
		</div>
	</div>
	<div class="text-center">
		Element
		<span
			class="font-medium {isVisible ? 'text-green-600 dark:text-green-500' : 'text-destructive'}"
		>
			{isVisible ? 'inside' : 'outside'}
		</span>
		the viewport
	</div>
</div>
