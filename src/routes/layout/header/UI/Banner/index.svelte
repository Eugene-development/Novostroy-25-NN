<script>
	import { page } from '$app/state';
	import FavoriteButton from './FavoriteButton/index.svelte';
	import MobileButton from './MobileButton/index.svelte';
</script>

<div class="sticky top-0 z-40 hidden items-center bg-gray-950 px-4 sm:px-3.5 md:flex">
	<div class="hidden flex-1 justify-start lg:flex">
		<div class="flex items-center justify-center space-x-3.5 tracking-wide">
			<a
				href="/about"
				class={page.url.pathname === '/about'
					? 'whitespace-nowrap text-xs text-sky-500'
					: 'whitespace-nowrap text-xs text-gray-50 hover:text-sky-500'}
			>
				О компании
			</a>
			<svg
				viewBox="0 0 2 2"
				class=" inline h-0.5 w-0.5 fill-current text-sky-500"
				aria-hidden="true"
			>
				<circle cx={1} cy={1} r={1} />
			</svg>
			<a
				href="/partnership"
				class={page.url.pathname === '/partnership'
					? 'whitespace-nowrap text-xs text-sky-500 '
					: 'whitespace-nowrap text-xs text-gray-50 hover:text-sky-500'}
			>
				Партнёрство
			</a>
			<svg
				viewBox="0 0 2 2"
				class="inline h-0.5 w-0.5 fill-current text-sky-500"
				aria-hidden="true"
			>
				<circle cx={1} cy={1} r={1} />
			</svg>
			<a
				href="/testimonials"
				class={page.url.pathname === '/testimonials'
					? 'whitespace-nowrap text-xs text-sky-500 '
					: 'whitespace-nowrap text-xs text-gray-50 hover:text-sky-500'}
			>
				Отзывы
			</a>
			<svg
				viewBox="0 0 2 2"
				class="inline h-0.5 w-0.5 fill-current text-sky-500"
				aria-hidden="true"
			>
				<circle cx={1} cy={1} r={1} />
			</svg>
			<a
				href="/installment"
				class={page.url.pathname === '/installment'
					? 'whitespace-nowrap text-xs text-sky-500 '
					: 'whitespace-nowrap text-xs text-gray-50 hover:text-sky-500'}
			>
				Рассрочка
			</a>
			<svg
				viewBox="0 0 2 2"
				class="inline h-0.5 w-0.5 fill-current text-sky-500"
				aria-hidden="true"
			>
				<circle cx={1} cy={1} r={1} />
			</svg>
			<a
				href="/guarantees"
				class={page.url.pathname === '/guarantees'
					? 'whitespace-nowrap text-xs text-sky-500 '
					: 'whitespace-nowrap text-xs text-gray-50 hover:text-sky-500'}
			>
				Гарантии
			</a>
			<svg
				viewBox="0 0 2 2"
				class="inline h-0.5 w-0.5 fill-current text-sky-500"
				aria-hidden="true"
			>
				<circle cx={1} cy={1} r={1} />
			</svg>
			<a
				href="/blog"
				class={page.url.pathname === '/blog'
					? 'whitespace-nowrap text-xs text-sky-500 '
					: 'whitespace-nowrap text-xs text-gray-50 hover:text-sky-500'}
			>
				Блог
			</a>
			<svg
				viewBox="0 0 2 2"
				class="inline h-0.5 w-0.5 fill-current text-sky-500"
				aria-hidden="true"
			>
				<circle cx={1} cy={1} r={1} />
			</svg>
			<a
				href="/contacts"
				class={page.url.pathname === '/contacts'
					? 'whitespace-nowrap text-xs text-sky-500 '
					: 'whitespace-nowrap text-xs text-gray-50 hover:text-sky-500'}
			>
				Контакты
			</a>
		</div>
	</div>

	<div class="hidden flex-1 justify-between lg:flex">
		<div class="flex flex-1">
			<div class="items-center py-1.5 lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
				<div
					class=" flex items-center justify-center px-2 py-1 text-xl font-semibold leading-6 xl:px-4"
				>
					<a
						href="tel:+79154000020"
						class="text-base font-normal tracking-wide text-gray-50 antialiased"
					>
						8 (915) 400-00-20
					</a>
				</div>
				<svg
					viewBox="0 0 2 2"
					class="mx-1 inline h-0.5 w-0.5 fill-current text-sky-500"
					aria-hidden="true"
				>
					<circle cx={1} cy={1} r={1} />
				</svg>
				<div
					class=" flex items-center justify-center px-2 py-1 text-xl font-semibold leading-6 xl:px-4"
				>
					<div class=" text-base font-normal tracking-wide text-gray-50 antialiased">
						info@novostroy.org
					</div>
				</div>
				<svg
					viewBox="0 0 2 2"
					class="mx-1 inline h-0.5 w-0.5 fill-current text-sky-500"
					aria-hidden="true"
				>
					<circle cx={1} cy={1} r={1} />
				</svg>

				<FavoriteButton />
			</div>
		</div>
	</div>
</div>

<div
	class="sticky top-0 z-50 flex items-center justify-between bg-gray-900 px-1.5 py-2 opacity-95 lg:hidden"
>
	<a href="/" class="w-24">
		<span class="sr-only">Логотип</span>
		<img
			class="size-7 w-auto px-1 sm:px-0"
			src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
			alt="logo"
		/>
	</a>

	<div class="flex">
		<!-- <PhoneIcon class="size-7 text-gray-50 pr-2" /> -->
		<a
			href="tel:+79154000020"
			class="font-display text-lg font-light tracking-wide text-gray-50 antialiased"
		>
			8 915 400-00-20
		</a>
	</div>

	<div class="flex w-24 justify-end divide-x">
		<FavoriteButton />
		<MobileButton />
	</div>
</div>
