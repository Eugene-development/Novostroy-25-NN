<script>
	import { visibleConsultationForm } from '$lib/state/formConsultation.svelte';
	import { onMount } from 'svelte';

	let directionElement;
	let hasTriggered = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry.isIntersecting && !hasTriggered) {
					// Отправляем цель в Яндекс Метрику
					if (typeof ym !== 'undefined') {
						ym(87611228, 'reachGoal', 'scroll_to_direction');
						// console.log('Цель отправлена: scroll_to_direction');
					}
					hasTriggered = true;
					observer.disconnect(); // Отключаем наблюдатель после первого срабатывания
				}
			},
			{ threshold: 0.3 } // Срабатывает, когда 30% элемента видно в области просмотра
		);

		if (directionElement) {
			observer.observe(directionElement);
		}

		return () => {
			if (directionElement) {
				observer.unobserve(directionElement);
			}
		};
	});
</script>

<div bind:this={directionElement} class="grid h-[50rem] grid-cols-1 grid-rows-2 gap-1 py-24 lg:grid-cols-2 lg:grid-rows-1">
	<div class="relative flex">
		<img
			src="https://storage.yandexcloud.net/mine2024/novostroy/catalog/1726652041_2353.jpg"
			alt="Кухонные гарнитуры"
			class="absolute inset-0 size-full object-cover scale-x-[-1]"
		/>
		<div class="relative flex w-full flex-col items-start justify-end bg-black/40 p-8 sm:p-12">
			<h2 class="text-lg font-medium text-white/75">Основное направление</h2>
			<p class="mt-1 text-2xl font-medium text-white">Кухонные гарнитуры</p>
			<button
				onclick={() => (visibleConsultationForm.value = !visibleConsultationForm.value)}
				class="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
				>Консультация</button
			>
		</div>
	</div>
	<div class="relative flex">
		<img
			src="https://www.aristo.ru/upload/iblock/a5d/8ug9lv7q11uwb6mjqtg4114d68ts1vxr/aristo_Stilnaya-prikhozhaya-VERTA-_-INTU.jpg"
			alt="Шкафы и гардеробы"
			class="absolute inset-0 size-full object-cover scale-x-[-1]"
		/>
		<div class="relative flex w-full flex-col items-start justify-end bg-black/40 p-8 sm:p-12">
			<h2 class="text-lg font-medium text-white/75">Основное направление</h2>
			<p class="mt-1 text-2xl font-medium text-white">Шкафы и гардеробы</p>
			<button
				onclick={() => (visibleConsultationForm.value = !visibleConsultationForm.value)}
				class="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
				>Консультация</button
			>
		</div>
	</div>
</div>
