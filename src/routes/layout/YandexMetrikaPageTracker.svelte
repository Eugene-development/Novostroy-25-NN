<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

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
				
				// Проверяем наличие слагов 'mebel' или 'stoleshnica' в URL
				if (path.includes('/mebel') || path.includes('/stoleshnica')) {
					// Определяем тип страницы для события
					const pageType = path.includes('/mebel') ? 'mebel' : 'stoleshnica';
					
					// Отправляем событие в Яндекс Метрику
					sendYandexMetrikaEvent('pageVisit', { pageType });
					console.log(`Отправлено событие в Яндекс Метрику: pageVisit, тип страницы: ${pageType}`);
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