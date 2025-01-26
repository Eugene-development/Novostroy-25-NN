<script>
	import Marquee from './Marquee.svelte';
	import Reviewcard from './Reviewcard.svelte';

	const reviews = [
		{
			name: 'BLUM',
			username: 'Австрия',
			body: 'Компания BLUM занимается производством премиальной мебельной фурнитуры',
			img: 'https://avatars.mds.yandex.net/i?id=1d1d8921520f354e5488f26d3015ec591ed887c4-5031604-images-thumbs&n=13'
		},
		{
			name: 'Hettich',
			username: 'Германия',
			body: 'Бренд, специализирующийся на производстве мебельной фурнитуры высокого класса',
			img: 'https://avatars.mds.yandex.net/i?id=3121a17134e862686c9e9adeba4322bbdd7745de-5231861-images-thumbs&n=13'
		},
		{
			name: 'FGV',
			username: 'Италия',
			body: 'Компания, специализирующаяся на производстве систем выдвижения и мебельных петель',
			img: 'https://avatars.mds.yandex.net/i?id=d8338ae7f892f1b8478da83c4e8d535a_sr-7106899-images-thumbs&n=13'
		},
		{
			name: 'Egger',
			username: 'Австрия',
			body: 'Производство плитных материалов различной толщины для каркасов и мебельных фасадов',
			img: 'https://logos-world.net/wp-content/uploads/2022/07/Egger-Logo.png'
		},
		{
			name: 'Renolit',
			username: 'Германия',
			body: 'Высококачественные полимерные пленки и термопластик для фасадов различного цвета',
			img: 'https://www.renolit.com/typo3conf/ext/renolit/Resources/Public/Svg/RENOLIT_Rely_on_it.svg'
		},
		{
			name: 'GTV',
			username: 'Польша',
			body: 'Доступная и качественная мебельная фурнитура и освещение из Польши с доставкой по всему миру',
			img: 'https://avatars.mds.yandex.net/i?id=a03767dd6a932bb1ef750ad2ee69b774_l-10136504-images-thumbs&n=13'
		}
	];

	let firstRow = reviews.slice(0, reviews.length / 2);
	let secondRow = reviews.slice(reviews.length / 2);
</script>

<div class="bg-white py-8 sm:py-12">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-5xl lg:text-center">
			<h2 class="text-base/7 font-semibold text-sky-600">Материалы</h2>
			<p
				class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance"
			>
				Бренды, говорящие о качестве
			</p>
			<!-- <p class="mt-6 text-lg/8 text-gray-600">Компания BLUM занимается производством премиальной мебельной фурнитуры</p> -->
		</div>
	</div>
</div>

<div
	class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-12 md:shadow-xl"
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
			<a href="https://zovofficial.com/" target="_blank">
				<img
					class="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
					src="https://zovofficial.com/image/catalog/logo-rus-x2.png"
					alt="ЗОВ"
				/>
			</a>

			<a href="https://www.stilkuhni.ru/" target="_blank">
				<img
					class="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
					src="https://avatars.mds.yandex.net/i?id=ada48033e9cfa95f38d69fc9ae7b5bcc25b72f13-5037427-images-thumbs&n=13"
					alt="Стильные кухни"
				/>
			</a>
			<a href="https://www.marya.ru/" target="_blank">
				<img
					class="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
					src="https://avatars.mds.yandex.net/i?id=b761d395235060d89bd5d574233ee6bca202edcb-2037526-images-thumbs&n=13"
					alt="Мария"
				/>
			</a>
			<a href="https://www.mrdoors.ru/" target="_blank">
				<img
					class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
					src="https://avatars.mds.yandex.net/i?id=cf4673eacc853d6f062852c16c8f10af8dd28ace-7909006-images-thumbs&n=13"
					alt="Мистер Дорс"
				/>
			</a>
			<a href="https://www.kuxni.net/" target="_blank">
				<img
					class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
					src="https://avatars.mds.yandex.net/i?id=a74ec62d72576744e414d4b9ac3b0455aa296a51-4477047-images-thumbs&n=13"
					alt="Кухонный двор"
				/>
			</a>
		</div>
		<div class="mt-16 flex justify-center">
			<p
				class="relative rounded-full bg-gray-50/50 px-4 py-1.5 text-sm/6 text-gray-600 ring-1 ring-inset ring-gray-900/5"
			>
				<span class="hidden md:inline">В нашей партнёрской сети уже более 240 компаний.</span>
				<a href="/partnership" class="font-semibold text-gray-900"
					><span class="absolute inset-0" aria-hidden="true"></span> Присоединяйтесь
					<span aria-hidden="true">&rarr;</span></a
				>
			</p>
		</div>
	</div>
</div>
