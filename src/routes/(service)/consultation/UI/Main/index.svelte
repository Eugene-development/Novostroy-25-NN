<script>
	import { visibleConsultationForm } from '$lib/state/formConsultation.svelte';
</script>

<div class="relative animate-fade animate-duration-500 animate-ease-in-out">
	<div class="mx-auto max-w-7xl">
		<div class="relative z-10 pt-8 lg:w-full lg:max-w-3xl">
			<svg
				class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<polygon points="0,0 90,0 50,100 0,100" />
			</svg>

			<div class="relative px-6 py-24 sm:py-32 lg:px-8 lg:py-36 lg:pr-0">
				<div class="mx-auto max-w-3xl lg:mx-0 lg:max-w-2xl">
					<div class="hidden sm:mb-10 sm:flex">
						<div
							class="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
						>
							Прочтите статью об этой услуге. Посетите <a
								href="/"
								class="whitespace-nowrap font-semibold text-sky-600"
								><span class="absolute inset-0" aria-hidden="true"></span>наш блог
								<span aria-hidden="true">&rarr;</span></a
							>
						</div>
					</div>
					<h1
						class="mb-6 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
					>
						Консультация дизайнера
					</h1>
					<p class="mt-2 text-pretty text-base font-medium text-gray-500 sm:text-lg/8">
						Планируете обновление интерьера или подбор мебели? Наш дизайнер поможет создать
						гармоничное и стильное пространство!
					</p>
					<p class="mt-2 text-pretty text-base font-medium text-gray-500 sm:text-lg/8">
						В рамках консультации вы получите профессиональные рекомендации по подбору материалов,
						расстановке мебели, выбору цветовых решений и декора.
					</p>
					<p class="mt-2 text-pretty text-base font-medium text-gray-500 sm:text-lg/8">
						Мы помогаем реализовать ваши идеи, учитывая функциональность и индивидуальный вкус.
						Оставьте заявку, и сделаем ваш дом уютным и красивым!
					</p>
					<div class="mt-10 flex items-center gap-x-6">
						<button
							onclick={() => visibleConsultationForm.value = !visibleConsultationForm.value}
							type="button"
							class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 hover:from-blue-600 hover:to-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
							>Закажите услугу<span class="mt-0.5" aria-hidden="true">&nbsp;&rarr;</span></button
						>
						<!-- <a href="/" class="text-sm/6 font-semibold text-gray-900"
							>Ознакомиться подробнее <span aria-hidden="true">→</span></a
						> -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-gray-50/50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
		<div class="mx-auto flex h-full max-w-2xl items-center justify-center py-4">
			<img
				src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
				alt="логотип"
				class="w-full max-w-7xl object-contain object-center"
			/>
		</div>
		<!-- <img
			class="aspect-[3/2] object-contain lg:aspect-auto lg:size-full"
			src="https://nsk-zabor.nethouse.ru/static/img/0000/0005/5075/55075406.m909a6efnd.W665.png"
			alt=""
		/> -->
		<!-- <img
			class="aspect-[3/2] object-contain lg:aspect-auto lg:size-full"
			src="https://sun9-78.userapi.com/s/v1/ig2/BMl8fmrHbPAlTUnt7Yh2tRT807hMFbtxCEq-hZWCQkJE6PxMwvAzitAiQi8WtRmJ7gAZbK1jpZTs5XD3ZZcHMAYr.jpg?quality=96&as=32x38,48x58,72x86,108x130,160x192,240x288,360x432,480x576,540x648,640x768,720x864,1080x1296,1280x1536,1440x1728,1800x2160&from=bu&u=eCQKi2IfXXl34kgFPjpk_7ut5G_Zn0i57jy8qzGZp4E&cs=672x807"
			alt=""
		/> -->
	</div>
</div>
