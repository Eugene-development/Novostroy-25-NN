<script>
	import {visibleCheckCity} from '$lib/state/visibleCheckCity.svelte'
	
	// Состояние чекбокса и кнопки
	let isChecked = $state(false);
	let isButtonEnabled = $derived(isChecked);
	
	// Функция для обработки изменения состояния чекбокса
	function handleCheckboxChange() {
		isChecked = !isChecked;
	}
	
	// Функция для закрытия модального окна
	function closeModal() {
		visibleCheckCity.value = false;
		// Сбрасываем состояние при закрытии
		isChecked = false;
	}
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
  <fieldset class="my-4">
  <legend class="sr-only">Notifications</legend>
  <div class="space-y-5">
    <div class="flex gap-3">
      <div class="flex h-6 shrink-0 items-center">
        <div class="group grid size-4 grid-cols-1">
          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" bind:checked={isChecked} onclick={handleCheckboxChange}>
          <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
            <path class="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path class="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div class="text-sm/6">
        <label for="comments" class="font-medium text-gray-900">Да, это верный регион</label>
        <!-- <p id="comments-description" class="text-gray-500">Get notified when someones posts a comment on a posting.</p> -->
      </div>
    </div>
  </div>
</fieldset>


        </div>
        <div class="mt-5 sm:mt-6">
          <button type="button" onclick={closeModal} class="inline-flex w-full justify-center rounded-md {isButtonEnabled ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-gray-300 cursor-not-allowed'} px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={!isButtonEnabled}>Подтвердить</button>
        </div>
      </div>
    </div>
  </div>
</div>

  
{/if}
