<script>
	import { enhance } from '$app/forms';

	import { visibleConsultationForm } from '$lib/state/formConsultation.svelte';

	let formMessage = $state('');
	let formError = $state(false);
	let testbot = $state('');

	// Обработчик отправки формы
	const handleSubmit = () => {
		return async ({ result }) => {
			if (result.type === 'success') {
				if (result.data.success) {
					formError = false;
					// Отправляем цель в Яндекс Метрику
					if (typeof window !== 'undefined' && window.ym) {
						window.ym(import.meta.env.VITE_YM, 'reachGoal', 'consultation_form_submit');
						console.log('Яндекс Метрика: цель consultation_form_submit достигнута');
					}
					// Закрываем форму после успешного создания
					setTimeout(() => {
						visibleConsultationForm.value = false;
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

{#if visibleConsultationForm.value}
	<div class="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed"></div>

		<div class="fixed overflow-hidden">
			<div class="absolute overflow-hidden">
				<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
					<div
						class="pointer-events-auto w-screen max-w-md animate-fade-left animate-duration-100 animate-ease-linear"
					>
						<form
							method="POST"
							action="/consultation?/sendFormConsultation"
							use:enhance={handleSubmit}
							class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
						>
							<div class="h-0 flex-1 overflow-y-auto">
								<div class="bg-blue-700 px-4 py-6 sm:px-6">
									<div class="flex items-center justify-between">
										<h2 class="text-base font-semibold text-white" id="slide-over-title">
											Консультация дизайнера
										</h2>
										<div class="ml-3 flex h-7 items-center">
											<button
												onclick={() => (visibleConsultationForm.value = false)}
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
											Дадим исчерпывающую консультацию по вашему будущему проекту
										</p>
									</div>
								</div>
								<div class="flex flex-1 flex-col justify-between">
									<div class="divide-y divide-gray-200 px-4 sm:px-6">
										<div class="space-y-6 pb-5 pt-6">
											<!-- Honeypot-поле (скрытое) -->
											<div class="hidden">
												<label for="checkbot" class="block text-sm font-medium text-gray-700"
													>Оставьте это поле пустым</label
												>
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

											<div>
												<label for="client-name" class="block text-sm/6 font-medium text-gray-900"
													>Ваше имя<sup class="ml-1 h-4 w-4 text-red-700"> &#x2736; </sup></label
												>
												<div class="mt-2">
													<input
														required
														type="text"
														name="client-name"
														id="client-name"
														class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
													/>
												</div>
											</div>
											<div>
												<label for="client-phone" class="block text-sm/6 font-medium text-gray-900"
													>Телефон<sup class="ml-1 h-4 w-4 text-red-700"> &#x2736; </sup></label
												>
												<div class="mt-2">
													<input
														required
														type="text"
														name="client-phone"
														id="client-phone"
														class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
													/>
												</div>
											</div>
											<div>
												<label for="client-email" class="block text-sm/6 font-medium text-gray-900"
													>Почта (не обязательно)</label
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
										<!-- <div class="pb-6 pt-4">
											<div class="flex text-sm">
												<a
													href="/"
													class="group inline-flex items-center font-medium text-blue-600 hover:text-blue-900"
												>
													<svg
														class="size-5 text-blue-500 group-hover:text-blue-900"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
														data-slot="icon"
													>
														<path
															d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"
														/>
														<path
															d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"
														/>
													</svg>
													<span class="ml-2">Прикрепите файл с информацией</span>
												</a>
											</div>
											<div class="mt-4 flex text-sm">
												<a
													href="/"
													class="group inline-flex items-center text-gray-500 hover:text-gray-900"
												>
													<svg
														class="size-5 text-gray-400 group-hover:text-gray-500"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
														data-slot="icon"
													>
														<path
															fill-rule="evenodd"
															d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
															clip-rule="evenodd"
														/>
													</svg>
													<span class="ml-2">Что прикреплять</span>
												</a>
											</div>
										</div> -->
									</div>
								</div>
							</div>
							<div class="flex shrink-0 justify-start px-4 py-4">
								<button
									onclick={() => (visibleConsultationForm.value = false)}
									type="button"
									class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
									>Закрыть</button
								>
								<button
									disabled={testbot !== ''}
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
