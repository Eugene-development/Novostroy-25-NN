<script>
	import {visibleCheckCity} from '$lib/state/visibleCheckCity.svelte'
	import { onMount } from 'svelte';
	
	// Состояние чекбоксов и кнопки
	let isCheckedMoscow = $state(false);
	let isCheckedOther = $state(false);
	// Honeypot-поле для защиты от ботов
	let testbot = $state('');
	// Флаг для отслеживания, была ли уже показана форма
	let formShownInSession = $state(false);
	// Ключ для localStorage
	const FORM_SHOWN_KEY = 'cityFormShown';
	// Кнопка активна, если выбран хотя бы один из чекбоксов
	let isButtonEnabled = $derived(isCheckedMoscow || isCheckedOther);
	
	// Функция для обработки изменения состояния чекбоксов
	function handleMoscowCheckboxChange() {
		isCheckedMoscow = !isCheckedMoscow;
		// Если выбран Москва, снимаем выбор с другого региона
		if (isCheckedMoscow && isCheckedOther) {
			isCheckedOther = false;
		}
	}
	
	function handleOtherCheckboxChange() {
		isCheckedOther = !isCheckedOther;
		// Если выбран другой регион, снимаем выбор с Москвы
		if (isCheckedOther && isCheckedMoscow) {
			isCheckedMoscow = false;
		}
	}
	
	// Функция для отправки события в Яндекс Метрику
	function sendYandexMetrikaEvent() {
		// Проверяем, что функция ym доступна
		if (typeof window !== 'undefined' && window.ym) {
			// Отправляем событие в Яндекс Метрику
			// 87611228 - это ID счетчика из app.html
			window.ym(import.meta.env.VITE_YM, 'reachGoal', 'cityConfirmed', {
				isMoscow: isCheckedMoscow,
				isOtherRegion: isCheckedOther
			});
		}
	}
	
	// Функция для закрытия модального окна
	function closeModal() {
		// Проверка на бота - если поле testbot заполнено, значит это бот
		if (testbot) {
			console.log('Обнаружен бот, действие отменено');
			return; // Прерываем выполнение функции
		}
		
		// Отправляем событие в Яндекс Метрику перед закрытием окна
		sendYandexMetrikaEvent();
		
		// Устанавливаем флаг, что форма была показана
		formShownInSession = true;
		// Сохраняем состояние в localStorage
		saveFormShownState();
		
		visibleCheckCity.value = false;
		// Сбрасываем состояние при закрытии
		isCheckedMoscow = false;
		isCheckedOther = false;
		testbot = ''; // Сбрасываем значение honeypot-поля
	}

	// Функция для проверки, была ли форма уже показана
	function checkIfFormShown() {
		// Проверяем только на клиентской стороне
		if (typeof window !== 'undefined' && window.localStorage) {
			return localStorage.getItem(FORM_SHOWN_KEY) === 'true';
		}
		return false;
	}

	// Функция для сохранения информации о показе формы
	function saveFormShownState() {
		// Сохраняем только на клиентской стороне
		if (typeof window !== 'undefined' && window.localStorage) {
			localStorage.setItem(FORM_SHOWN_KEY, 'true');
		}
	}

	// Функция для автоматического показа модального окна через 10 секунд
	onMount(() => {
		// Проверяем, была ли форма уже показана ранее
		formShownInSession = checkIfFormShown();
		
		// Запускаем таймер только если форма еще не была показана
		if (!formShownInSession) {
			setTimeout(() => {
				// Показываем модальное окно
				visibleCheckCity.value = true;
			}, 10000); // 10000 мс = 10 секунд
		}
	});
</script>



{#if visibleCheckCity.value}

<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
  <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
        <div>
          <div class="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
            <svg class="size-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-base font-semibold text-gray-900" id="modal-title">Вы из Москвы или МО?</h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">Нам нужно это для более точных предложений и акций для Вас.</p>
            </div>
          </div>
  <!-- Honeypot-поле (скрытое) -->
  <div class="hidden" aria-hidden="true">
    <label for="checkbot" class="block text-sm font-medium text-gray-700">Оставьте это поле пустым</label>
    <input
      type="text"
      id="checkbot"
      name="checkbot"
      bind:value={testbot}
      tabindex="-1"
      autocomplete="off"
      class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    />
  </div>
  <!--  -->
  <fieldset class="my-4">
  <legend class="sr-only">Notifications</legend>
  <div class="space-y-5">
    <div class="flex gap-3">
      <div class="flex h-6 shrink-0 items-center">
        <div class="group grid size-4 grid-cols-1">
          <input id="moscow" aria-describedby="moscow-description" name="moscow" type="checkbox" class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" bind:checked={isCheckedMoscow} onclick={handleMoscowCheckboxChange}>
          <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
            <path class="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path class="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div class="text-sm/6">
        <label for="moscow" class="font-medium text-gray-900">Да, это верный регион</label>
      </div>
    </div>
    
    <div class="flex gap-3 mt-3">
      <div class="flex h-6 shrink-0 items-center">
        <div class="group grid size-4 grid-cols-1">
          <input id="other" aria-describedby="other-description" name="other" type="checkbox" class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" bind:checked={isCheckedOther} onclick={handleOtherCheckboxChange}>
          <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
            <path class="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path class="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div class="text-sm/6">
        <label for="other" class="font-medium text-gray-900">Другой регион</label>
      </div>
    </div>
  </div>
</fieldset>


        </div>
        <div class="mt-5 sm:mt-6">
          <button type="button" onclick={closeModal} class="inline-flex w-full justify-center rounded-md {isButtonEnabled ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-gray-300 cursor-not-allowed'}  px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={!isButtonEnabled}>Подтвердить</button>
        </div>
      </div>
    </div>
  </div>
</div>

  
{/if}
