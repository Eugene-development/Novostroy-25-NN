<script>
	import { visibleConsultationForm } from '$lib/state/formConsultation.svelte';
</script>

<div class="grid h-screen grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
	<div class="relative flex">
	  <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg" alt="" class="absolute inset-0 size-full object-cover">
	  <div class="relative flex w-full flex-col items-start justify-end bg-black/40 p-8 sm:p-12">
		<h2 class="text-lg font-medium text-white/75">Основное направление</h2>
		<p class="mt-1 text-2xl font-medium text-white">Кухонные гарнитуры</p>
		<button onclick={() => (visibleConsultationForm.value = true)} class="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50">Консультация</button>
	  </div>
	</div>
	<div class="relative flex">
	  <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg" alt="" class="absolute inset-0 size-full object-cover">
	  <div class="relative flex w-full flex-col items-start justify-end bg-black/40 p-8 sm:p-12">
		<h2 class="text-lg font-medium text-white/75">Основное направление</h2>
		<p class="mt-1 text-2xl font-medium text-white">Шкафы и гардеробы</p>
		<button onclick={() => (visibleConsultationForm.value = true)} class="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50">Консультация</button>
	  </div>
	</div>
</div>
