<script>
	import { fade } from 'svelte/transition';

	import MobileMenu from './MobileMenu/index.svelte';

	let visibleCatalogMenu = $state(false);
	let visibleServicesMenu = $state(false);

	let { data } = $props();
</script>

<header class="bg-gray-50">
	<nav
		class="max-w-9xl mx-auto hidden items-center justify-between p-2 lg:flex lg:px-8"
		aria-label="Global"
	>
		<div class="flex items-center lg:flex-1 ">
			<a href="/" class="-m-1.5 p-1.5 -mb-8 bg-gray-50 rounded-b-lg z-30 shadow-lg">
				<span class="sr-only">Компания Новострой</span>
				<img
					class="size-20 w-auto "
					src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
					alt="Логотип компании Новострой"
				/>
			</a>
		</div>
		<!-- <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div> -->
		<div class="-ml-7 flex items-center lg:gap-x-12">
			<a href="/" class="text-base font-medium text-gray-900 hover:text-pink-700">Главная</a>

			<div onmouseleave={() => (visibleServicesMenu = false)} class="relative" role="navigation">
				<button
					onmouseenter={() => (visibleServicesMenu = true)}
					type="button"
					class="flex items-center gap-x-1 py-3 text-base font-medium text-gray-900 hover:text-pink-700"
					aria-expanded={visibleServicesMenu}
				>
					Наши услуги
					<!-- <svg class="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg> -->
				</button>

				{#if visibleServicesMenu}
					<div
						transition:fade={{ duration: 100, delay: 50 }}
						role="menu"
						tabindex="0"
						class="absolute -left-8 top-full z-20 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5"
					>
						<a
							href="/consultation"
							class="block rounded-lg px-3 py-2 text-sm/6 font-medium text-gray-900 hover:bg-gray-50"
							>Бесплатная консультация</a
						>
						<a
							href="/design-project"
							class="block rounded-lg px-3 py-2 text-sm/6 font-medium text-gray-900 hover:bg-gray-50"
							>Дизайн интерьера</a
						>
						<a
							href="/measurement"
							class="block rounded-lg px-3 py-2 text-sm/6 font-medium text-gray-900 hover:bg-gray-50"
							>Замер помещения</a
						>
						<a
							href="/furniture-project"
							class="block rounded-lg px-3 py-2 text-sm/6 font-medium text-gray-900 hover:bg-gray-50"
							>Проектирование мебели</a
						>
						<!-- <a
							href="/delivery"
							class="block rounded-lg px-3 py-2 text-sm/6 font-medium text-gray-900 hover:bg-gray-50"
							>Доставка с грузчиками</a
						> -->
						<a
							href="/assembly-and-installation"
							class="block rounded-lg px-3 py-2 text-sm/6 font-medium text-gray-900 hover:bg-gray-50"
							>Сборка и установка</a
						>
					</div>
				{/if}
			</div>

			<!-- <div role="navigation" onmouseleave={() => (visibleCatalogMenu = false)} class="relative">
				<button
					onmouseenter={() => (visibleCatalogMenu = true)}
					type="button"
					class="flex items-center gap-x-1 py-3 text-lg font-semibold text-gray-900"
					aria-expanded={visibleCatalogMenu}
				>
					Каталог
					<svg class="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
				</button>

				{#if visibleCatalogMenu}
					<div
						transition:fade={{ duration: 100, delay: 50 }}
						role="menu"
						tabindex="0"
						class="absolute -left-8 top-full z-20 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
					>
						<div class=" px-3 py-2">
							<div class="group relative flex gap-x-6 rounded-3xl p-4 text-sm/6 hover:bg-gray-50">
								<div
									class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
								>
									<svg
										class="size-6 text-gray-600 group-hover:text-indigo-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
										data-slot="icon"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
										/>
									</svg>
								</div>
								<div class="flex-auto">
									<a href="/mebel" class="block text-lg font-semibold text-gray-900">
										Мебель
										<span class="absolute inset-0"></span>
									</a>
									<p class="mt-1 text-gray-600">
										Качественная и стильная фабричная мебель под любой запрос и бюджет
									</p>
								</div>
							</div>
							<div class="group relative flex gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
								<div
									class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
								>
									<svg
										class="size-6 text-gray-600 group-hover:text-indigo-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
										data-slot="icon"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
										/>
									</svg>
								</div>
								<div class="flex-auto">
									<a href="/stoleshnica" class="block text-lg font-semibold text-gray-900">
										Столешницы
										<span class="absolute inset-0"></span>
									</a>
									<p class="mt-1 text-gray-600">
										Рабочая зона из высокопрочных материалов с различными декорами
									</p>
								</div>
							</div>
							<div class="group relative flex gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
								<div
									class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
								>
									<svg
										class="size-6 text-gray-600 group-hover:text-indigo-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
										data-slot="icon"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
										/>
									</svg>
								</div>
								<div class="flex-auto">
									<a href="/tehnika" class="block text-lg font-semibold text-gray-900">
										Бытовая техника
										<span class="absolute inset-0"></span>
									</a>
									<p class="mt-1 text-gray-600">
										Встраиваемая, отдельностоящая и мелкобытовая техника для вашего дома
									</p>
								</div>
							</div>
							<div class="group relative flex gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
								<div
									class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
								>
									<svg
										class="size-6 text-gray-600 group-hover:text-indigo-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
										data-slot="icon"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
										/>
									</svg>
								</div>
								<div class="flex-auto">
									<a href="/santehnika" class="block text-lg font-semibold text-gray-900">
										Сантехника
										<span class="absolute inset-0"></span>
									</a>
									<p class="mt-1 text-gray-600">
										Стальные и композитные мойки, а также сопутствующие товары к ним
									</p>
								</div>
							</div>
						</div>
						<div
							class="grid grid-cols-2 divide-x divide-gray-300 border-t border-gray-300 bg-gray-100"
						>
							<a
								href="https://vk.com/vknovostroy"
								class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
							>
								<span class=" text-lg font-semibold">VK</span> Вконтакте
							</a>
							<a
								href="/"
								class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-telegram"
									><path d="M22 4.01L2 10l4 2 2 8 4-4 6 2 4-14z"></path></svg
								>
								Телеграм канал
							</a>
						</div>
					</div>
				{/if}
			</div> -->
			<a href="/mebel" class="text-base font-medium text-gray-900 hover:text-pink-700">Каталог мебели</a>
			<a href="/stoleshnica" class="text-base font-medium text-gray-900 hover:text-pink-700">Столешницы</a>
			<a href="/actions" class="text-base font-medium text-gray-900 hover:text-pink-700">Акции</a>
			<!-- <a href="/contacts" class="text-base font-medium text-gray-900">Контакты</a> -->
		</div>

		<div class="flex items-center lg:flex-1 lg:justify-end">
			<p
				class="duration-400 group relative grid overflow-hidden rounded-xl px-4 py-2 shadow-[0_1000px_0_0_hsl(0_0%_70%)_inset] transition-colors"
			>
				<span>
					<span
						class="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
					></span>
				</span>
				<span
					class="backdrop absolute inset-px rounded-[11px] bg-gray-50/90 transition-colors duration-200 group-hover:bg-gray-50"
				></span>
				<span class="z-10 flex text-base font-normal text-gray-900">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
					/>
					<span>г. Москва и МО</span>
				</span>
			</p>
		</div>
	</nav>

	<MobileMenu {data} />
</header>
