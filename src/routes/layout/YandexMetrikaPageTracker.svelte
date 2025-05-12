<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { pushState, replaceState } from '$app/navigation';

	// Функция для отправки события в Яндекс Метрику
	function sendYandexMetrikaEvent(eventName, params = {}) {
		// Проверяем, что функция ym доступна
		if (typeof window !== 'undefined' && window.ym) {
			// Отправляем событие в Яндекс Метрику
			// 87611228 - это ID счетчика из app.html
			window.ym(87611228, 'reachGoal', eventName, params);
		}
	}

	// Отслеживаем изменения URL
	let currentPath = '';

	onMount(() => {
		// Подписываемся на изменения страницы
		const unsubscribe = page.subscribe(($page) => {
			const path = $page.url.pathname;
			
			// Проверяем, изменился ли путь
			if (path !== currentPath) {
				currentPath = path;
				
				// Проверяем наличие слага 'mebel' в URL
				if (path.includes('/mebel')) {
					// Отправляем отдельное событие для страниц мебели
					sendYandexMetrikaEvent('mebelPageVisit');
					console.log('Отправлено событие в Яндекс Метрику: mebelPageVisit');
				}
				
				// Проверяем наличие слага 'stoleshnica' в URL
				if (path.includes('/stoleshnica')) {
					// Отправляем отдельное событие для страниц столешниц
					sendYandexMetrikaEvent('stoleshnicaPageVisit');
					console.log('Отправлено событие в Яндекс Метрику: stoleshnicaPageVisit');
				}
			}
		});

		// Отписываемся при размонтировании компонента
		return () => {
			unsubscribe();
		};
	});
</script>

<!-- Компонент не имеет визуального представления -->