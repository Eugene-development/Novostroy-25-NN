<script>
	import { IsInViewport } from 'runed';

	let targetNode = $state();
	let hasBeenVisible = $state(false);
	const inViewport = new IsInViewport(() => targetNode);

	$effect(() => {
		if (inViewport.current && !hasBeenVisible) {
			hasBeenVisible = true;
		}
	});

	const cards = [
		{
			name: 'Консультация',
			description:
				'Наш менеджер даст консультацию по материалам и по возможным решениям в проектировании мебели'
		},
		{
			name: 'Замер',
			description:
				'Организуем и осуществим проектный замер помещения с обозначением углов, коммуникаций и розеток'
		},
		{
			name: 'Проект',
			description:
				'Дизайнер составит проект мебели с учётом ваших пожеланий, размеров помещения и своего опыта'
		},
		{
			name: 'Договор',
			description:
				'Заключим договор в удобном для Вас салоне, в котором будут указаны все условия выполнения заказа'
		},
		{
			name: 'Изготовление',
			description:
				'Фабрика изготовит заказ на высокотехнологичном оборудовании под полным контролем технологов'
		},
		{
			name: 'Сборка',
			description:
				'Профессиональные сборщики, прошедшие специальное обучение, качественно сделают работу'
		}
	];
</script>

<div class="relative isolate overflow-hidden bg-gray-50/50 py-24 sm:py-48">
	<img
			src="https://zov.top/_next/image?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fmine2024%2Fzov%2FZg7llpCInCBFGyb7xO0B7Qkac7pwWVorXWQeLC2K.jpg&w=1920&q=75"
			alt="Кухонный гарнитур"
			class="absolute inset-0 -z-10 size-full object-cover "
		/>
		<div class="absolute inset-0 -z-10 bg-black/50"></div>
		<!-- <div class="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50/10 to-gray-900/90"></div> -->

	<div
		class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
	>
		<div
			class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-gray-500/50 to-gray-400/10 opacity-10"
			style={{
				clipPath:
					'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
			}}
		></div>
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="p-8 mx-auto max-w-2xl lg:mx-0 bg-gray-900/10">
			<h2 class="text-base/7 font-semibold text-sky-300">Это важно</h2>
			<h2 class="text-4xl font-bold text-white md:text-7xl">Наша работа</h2>
			<p class="mx-auto mt-6 text-sm leading-7 text-white sm:text-xl">
				Мы поддержим вас на всех этапах работы над мебельным проектом: от первой консультации до дня
				финальной сборки. Наша основная задача — сделать для вас процесс максимально комфортным и результат
				безупречным.
			</p>
		</div>
		<div bind:this={targetNode}>
			{#if hasBeenVisible}
				<div
					class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 border-t border-gray-200 pt-10 sm:mt-20 lg:mx-0 bg-black/40 rounded-xl p-6 lg:max-w-none lg:grid-cols-3 lg:gap-8"
				>
					{#each cards as card, i}
						<div
							class="animate-fade-up animate-duration-1000 animate-ease-in-out"
							style="animation-delay: {i * 0.2}s"
						>
							<div
								class="flex gap-x-3 rounded-xl bg-gradient-to-br from-black/20 to-black/40 p-5 shadow-lg shadow-gray-500/20 ring-1 ring-inset ring-sky-500/50"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width={1.5}
									stroke="currentColor"
									class="size-7 flex-none text-sky-600"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
								</svg>

								<div class="leading-7">
									<h3 class="text-lg font-semibold text-gray-50">
										{card.name}
									</h3>
									<p class="mt-2 text-pretty font-medium text-sm text-gray-300">
										{card.description}
									</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
