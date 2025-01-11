<script>
	import Marquee from './Marquee.svelte';
	import Reviewcard from './Reviewcard.svelte';

	const reviews = [
		{
			name: 'BLUM',
			username: 'Австрия',
			body: 'Компания BLUM занимается производством премиальной фурнитуры',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'Hettich',
			username: 'Германия',
			body: 'Бренд, специализирующийся на производстве мебельной фурнитуры',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'FGV',
			username: 'Италия',
			body: 'Компания, специализирующаяся на производстве систем выдвижения и петель',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'Egger',
			username: 'Фурнитура',
			body: 'Австрийская компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'ЗОВ',
			username: 'Фурнитура',
			body: 'Австрийская компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'Мария',
			username: 'Фурнитура',
			body: 'Австрийская компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'Стильные кухни',
			username: 'Фурнитура',
			body: 'Австрийская компания BLUM занимается производством премиальной фурнитуры.',
			img: 'https://w7.pngwing.com/pngs/685/353/png-transparent-blum-hd-logo.png'
		},
		{
			name: 'Нижегородская кухня',
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

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5"
		>
			<img
				class="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
				src="https://zovofficial.com/image/catalog/logo-rus-x2.png"
				alt="ЗОВ"
			/>
			<img
				class="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
				src="https://avatars.mds.yandex.net/i?id=ada48033e9cfa95f38d69fc9ae7b5bcc25b72f13-5037427-images-thumbs&n=13"
				alt="Стильные кухни"			/>
			<img
				class="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
				src="https://avatars.mds.yandex.net/i?id=b761d395235060d89bd5d574233ee6bca202edcb-2037526-images-thumbs&n=13"
				alt="Мария"
			/>
			<img
				class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
				src="https://avatars.mds.yandex.net/i?id=cf4673eacc853d6f062852c16c8f10af8dd28ace-7909006-images-thumbs&n=13"
				alt="Мистер Дорс"
			/>
			<img
				class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
				src="https://avatars.mds.yandex.net/i?id=a74ec62d72576744e414d4b9ac3b0455aa296a51-4477047-images-thumbs&n=13"
				alt="Кухонный двор"
			/>
		</div>
		<div class="mt-16 flex justify-center">
			<p
				class="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm/6 text-gray-600 ring-1 ring-inset ring-gray-900/5"
			>
				<span class="hidden md:inline">В нашей партнёрской сети уже более 240 компаний.</span>
				<a href="/partnership" class="font-semibold text-sky-600"
					><span class="absolute inset-0" aria-hidden="true"></span> Присоединяйтесь
					<span aria-hidden="true">&rarr;</span></a
				>
			</p>
		</div>
	</div>
</div>
