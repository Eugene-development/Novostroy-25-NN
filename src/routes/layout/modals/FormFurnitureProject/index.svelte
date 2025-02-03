<script>
	import { enhance } from '$app/forms';

	import { visibleFurnitureProjectForm } from '$lib/state/formFurnitureProject.svelte';

	let formMessage = $state('');
	let formError = $state(false);

	// Обработчик отправки формы
	const handleSubmit = () => {
		return async ({ result }) => {
			if (result.type === 'success') {
				if (result.data.success) {
					formError = false;
					// Закрываем форму после успешного создания
					setTimeout(() => {
						visibleFurnitureProjectForm.value = false;
						formMessage = 'Форма отправлена успешно';
						console.log(formMessage);
					}, 500);
				} else {
					formMessage = `Ошибка: ${result.data.error}`;
					console.log(formMessage);
					formError = true;
				}
			}
		};
	};

	let { data, form } = $props();
</script>

{#if visibleFurnitureProjectForm.value}
	<div class="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed"></div>

		<div class="fixed overflow-hidden">
			<div class="absolute overflow-hidden">
				<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
					<div
						class="pointer-events-auto w-screen max-w-md animate-fade-left animate-duration-100 animate-ease-linear"
					>
						<form method="POST"
						action="/furniture-project?/sendFormFurnitureProject"
						use:enhance={handleSubmit} class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
							<div class="h-0 flex-1 overflow-y-auto">
								<div class="bg-blue-700 px-4 py-6 sm:px-6">
									<div class="flex items-center justify-between">
										<h2 class="text-base font-semibold text-white" id="slide-over-title">
											Создание и просчёт проекта
										</h2>
										<div class="ml-3 flex h-7 items-center">
											<button
												onclick={() => (visibleFurnitureProjectForm.value = false)}
												type="button"
												class="relative -mt-4 rounded-md text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
											>
												<span class="absolute -inset-2.5"></span>
												<span class="sr-only">Закрыть</span>
												<svg
													class="size-6 text-red-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													aria-hidden="true"
													data-slot="icon"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M6 18 18 6M6 6l12 12"
													/>
												</svg>
											</button>
										</div>
									</div>
									<div class="mt-1">
										<p class="text-sm text-blue-300">
											Составим стартовый проект со всеми деталями и просчитаем стоимость
										</p>
									</div>
								</div>
								<div class="flex flex-1 flex-col justify-between">
									<div class="divide-y divide-gray-200 px-4 sm:px-6">
										<div class="space-y-6 pb-5 pt-6">
											<div>
												<label for="client-name" class="block text-sm/6 font-medium text-gray-900"
													>Ваше имя<sup class="ml-1 h-4 w-4 text-red-700"> &#x2736; </sup></label
												>
												<div class="mt-2">
													<input
														type="text"
														name="client-name"
														id="client-name"
														class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
													/>
												</div>
											</div>
											<div>
												<label
													for="client-phone"
													class="block text-sm/6 font-medium text-gray-900"
													>Телефон<sup class="ml-1 h-4 w-4 text-red-700"> &#x2736; </sup></label
												>
												<div class="mt-2">
													<input
														type="text"
														name="client-phone"
														id="client-phone"
														class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
													/>
												</div>
											</div>										
											<div>
												<label
													for="client-email"
													class="block text-sm/6 font-medium text-gray-900">Почта</label
												>
												<div class="mt-2">
													<input
														type="text"
														name="client-email"
														id="client-email"
														class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
													/>
												</div>
											</div>
											<div>
												<label
													for="comment"
													class="block text-base font-medium leading-6 text-gray-900"
												>
													Ваш комментарий
												</label>
												<div class="mt-2">
													<textarea
														id="comment"
														name="client-comment"
														rows={3}
														class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
													></textarea>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="flex shrink-0 justify-start px-4 py-4">
								<button
									onclick={() => (visibleFurnitureProjectForm.value = false)}
									type="button"
									class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
									>Закрыть</button
								>
								<button
									type="submit"
									class="ml-4 inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
									>Отправить</button
								>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
