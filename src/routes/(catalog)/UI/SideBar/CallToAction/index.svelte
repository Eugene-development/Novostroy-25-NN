<script>
	import { visibleConsultationForm } from '$lib/state/formConsultation.svelte';
	import { visibleMeasuringForm } from '$lib/state/formMeasuring.svelte';
	import { visibleFurnitureProjectForm } from '$lib/state/formFurnitureProject.svelte';

	function openConsultationForm() {
		visibleMeasuringForm.value = false;
		visibleFurnitureProjectForm.value = false;
		visibleConsultationForm.value = true;
	}

	function openMeasuringForm() {
		visibleConsultationForm.value = false;
		visibleFurnitureProjectForm.value = false;
		visibleMeasuringForm.value = true;
	}

	function openFurnitureProjectForm() {
		visibleConsultationForm.value = false;
		visibleMeasuringForm.value = false;
		visibleFurnitureProjectForm.value = true;
	}
</script>

<div class="mb-3">
	<div class="grid grid-cols-3 gap-1">
		<button
			onclick={openConsultationForm}
			type="button"
			class="group flex cursor-pointer flex-col items-center justify-center rounded-xl bg-blue-50 p-2.5 hover:bg-blue-100"
		>
			<span
				class="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="size-4 fill-blue-600"
				>
					<path
						fillRule="evenodd"
						d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
						clipRule="evenodd"
					/>
				</svg>
			</span>
			<span class="text-xs font-normal text-blue-600"> Дизайнер </span>
		</button>
		<button
			onclick={openMeasuringForm}
			type="button"
			class="group flex cursor-pointer flex-col items-center justify-center rounded-xl bg-purple-50 p-2.5 hover:bg-purple-100"
		>
			<span
				class="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="size-4 fill-purple-600"
				>
					<path
						d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z"
					/>
					<path
						fillRule="evenodd"
						d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
						clipRule="evenodd"
					/>
					<path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
				</svg>
			</span>
			<span class="text-xs font-normal text-purple-600"> Замер </span>
		</button>
		<button
			onclick={openFurnitureProjectForm}
			type="button"
			class="group flex cursor-pointer flex-col items-center justify-center rounded-xl bg-teal-50 p-2.5 hover:bg-teal-100"
		>
			<span
				class="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 group-hover:bg-teal-200"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="size-4 fill-teal-600"
				>
					<path
						d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z"
					/>
				</svg>
			</span>
			<span class="text-xs font-normal text-teal-600"> Проект </span>
		</button>
	</div>
</div>
