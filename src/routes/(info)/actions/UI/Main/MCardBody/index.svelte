<script>
	import { cn } from '$lib/utils';

	let card = {
		title: 'Coding is Fun',
		desc: '"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie'
	};
	let className = '';
	export { className as class };
</script>

<div class={cn(className)}>
	<h3 class="mb-1 text-xl font-bold text-gray-900">
		{card.title}
	</h3>
	<p class="text-gray-700">{card.desc}</p>
</div>
