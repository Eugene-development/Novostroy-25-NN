<script>
	import Marquee from './Marquee.svelte';
	import Reviewcard from './Reviewcard.svelte';

	const reviews = [
		{
			name: 'BLUM',
			username: 'Австрия',
			body: 'Компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'Hettich',
			username: 'Германия',
			body: 'Австрийская компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'BLUM',
			username: 'Фурнитура',
			body: 'Австрийская компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'BLUM',
			username: 'Фурнитура',
			body: 'Австрийская компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'BLUM',
			username: 'Фурнитура',
			body: 'Австрийская компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'BLUM',
			username: 'Фурнитура',
			body: 'Австрийская компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'BLUM',
			username: 'Фурнитура',
			body: 'Австрийская компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'BLUM',
			username: 'Фурнитура',
			body: 'Австрийская компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'BLUM',
			username: 'Фурнитура',
			body: 'Австрийская компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'BLUM',
			username: 'Фурнитура',
			body: 'Австрийская компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'BLUM',
			username: 'Фурнитура',
			body: 'Австрийская компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'BLUM',
			username: 'Фурнитура',
			body: 'Австрийская компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		}
	];

	let firstRow = reviews.slice(0, reviews.length / 2);
	let secondRow = reviews.slice(reviews.length / 2);
</script>

<div
	class="bg-background relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border py-20 md:shadow-xl"
>
	<Marquee pauseOnHover class="[--duration:100s]">
		{#each firstRow as item}
			<Reviewcard {...item} />
		{/each}
	</Marquee>
	<Marquee reverse pauseOnHover class="[--duration:100s]">
		{#each secondRow as item}
			<Reviewcard {...item} />
		{/each}
	</Marquee>
	<div
		class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"
	></div>
	<div
		class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"
	></div>
</div>
