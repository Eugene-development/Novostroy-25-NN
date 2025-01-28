<script lang="ts">
	import { cn } from '$lib/utils';
	import { AnimatePresence, Motion } from 'svelte-motion';

	let className: any = '';
	export { className as class };

	export let words = 'Fade In';
	export let delay = 0.19;
	export let variants = {
		hidden: { opacity: 0 },
		visible: (i: any) => ({
			y: 0,
			opacity: 1,
			transition: { delay: i * delay }
		})
	};
	let wordsspilit = words.split(' ');
</script>

<Motion {variants} initial="hidden" animate="visible" let:motion>
	<h1
		class={cn(
			'text-base font-semibold tracking-[-0.01em] text-black drop-shadow-sm sm:text-xl md:text-3xl/10 ',
			className
		)}
		use:motion
	>
		{#each wordsspilit as word, i}
			<Motion {variants} custom={i} let:motion>
				<span use:motion> {word}</span>
			</Motion>
		{/each}
	</h1>
</Motion>
