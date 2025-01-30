<script>
	import { Main } from './UI';
	const incentives = [
		// {
		// 	name: 'Экономим время',
		// 	imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
		// 	description: 'Обсудим проект с несколькими фабриками и выберем оптимальный вариант.'
		// },
		// {
		// 	name: 'Экономим деньги',
		// 	imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
		// 	description: 'Получим лучшее предложение под ваш бюджет с хорошими скидками.'
		// },
		// {
		// 	name: 'Экономим настроение',
		// 	imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
		// 	description: 'Избавим вас от необходимости волноваться за правильный выбор.'
		// }
		{
		  name: "Выбор материалов",
		  imageSrc:
		    "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
		  description:
		    "Мы сможем предложить практически любой материал, используемый в производстве.",
		},
		{
		  name: "Выбор цвета",
		  imageSrc:
		    "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
		  description:
		    "Мы поможем определиться с цветовой гаммой подбираемых материалов.",
		},
		{
		  name: "Выбор изготовителя",
		  imageSrc:
		    "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
		  description:
		    "Мы знаем ответ на самый важный вопрос кому доверить изготовление заказа.",
		},
	];

</script>

<svelte:head>
	<title>Консультация</title>
	<meta name="description" content="Консультация" />
</svelte:head>

<Main />
	<div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
		<div class="mx-auto max-w-4xl px-4 lg:max-w-none">
			<div class=" grid grid-cols-1 gap-x-8 gap-y-10 border-t pt-8 sm:pt-16 lg:grid-cols-3">
				{#each incentives as incentive}
					<div>
						<div class="sm:flex lg:block">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								class="size-8 text-sky-600"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
								/>
							</svg>
						</div>
						<div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
							<h3 class="text-base font-bold text-gray-700 sm:text-lg">
								{incentive.name}
							</h3>
							<p class="mt-2 text-sm leading-6 text-gray-700 sm:text-base">
								{incentive.description}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

