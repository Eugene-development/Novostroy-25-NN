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
				'Профессиональные сборщики, прошедшие специализированное обучение, качественно выполнят работу'
		}
	];


</script>

<div class="relative isolate overflow-hidden  py-24 sm:py-32">
	<div
		class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
	>
		<div
			class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-gray-800/50 to-gray-600/10 opacity-20"
			style={{
				clipPath:
					'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
			}}
		></div>
	</div>
	<div
		class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
	>
		<div
			class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-gray-800/50 to-gray-600/10 opacity-20"
			style={{
				clipPath:
					'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
			}}
		></div>
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl lg:mx-0">
			<h2 class="text-4xl font-bold text-gray-950 md:text-7xl">Наша работа</h2>
			<p class="mx-auto mt-6 text-sm leading-7 text-gray-950 sm:text-lg">
				Мы поддержим вас на всех этапах работы над мебельным проектом: от первой консультации до дня финальной сборки. Наша задача — сделать процесс максимально комфортным и результат безупречным.			</p>
		</div>
		<div bind:this={targetNode}>
			{#if hasBeenVisible}
				<div
					class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 border-t border-gray-500/10 pt-10"
				>
					{#each cards as card, i}
						<div
							class="animate-fade-up animate-duration-1000 animate-ease-in-out"
							style="animation-delay: {i * 0.2}s"
						>
							<div class="flex gap-x-3 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width={1.5}
									stroke="currentColor"
									class="h-7 w-5 flex-none text-sky-400"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
								</svg>

								<div class="leading-7">
									<h3 class="text-base font-semibold text-gray-900">
										{card.name}
									</h3>
									<p class="mt-2 text-pretty text-sm text-gray-600">
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
