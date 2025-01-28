<script>
	import { visibleMobileMenu } from '$lib/state/visibleMobileMenu.svelte';

	import { DropdownMenu } from 'bits-ui';

	let { data } = $props();
	$inspect(data);
</script>

{#if visibleMobileMenu.value}
	<div class="" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed inset-0 z-10"></div>
		<div
			class="fixed inset-y-0 right-0 z-10 mt-24 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center justify-between">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">Логотип компании Новострой</span>
					<img
						class="h-8 w-auto"
						src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
						alt="Логотип компании Новострой"
					/>
				</a>
				<button
					onclick={() => (visibleMobileMenu.value = false)}
					type="button"
					class="-m-2.5 rounded-md p-2.5 text-gray-700"
				>
					<span class="sr-only">Закрыть меню</span>
					<svg
						class="size-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-500/10">
					<div class="space-y-2 py-6">
						<div class="-mx-3">
							<button
								type="button"
								class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg/7 font-semibold text-gray-900 hover:bg-gray-50"
								aria-controls="disclosure-1"
								aria-expanded="false"
							>
								Услуги
								<!--
                    Expand/collapse icon, toggle classes based on menu open state.
  
                    Open: "rotate-180", Closed: ""
                  -->
								<svg
									class="size-5 flex-none"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
								>
									<path
										fill-rule="evenodd"
										d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
							<!-- 'Product' sub-menu, show/hide based on menu state. -->
							<div class="mt-2 hidden space-y-2" id="disclosure-1">
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Консультация</a
								>
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Дизайн проекта</a
								>
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Замер помещения</a
								>
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Проект мебели</a
								>
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Сборка и установка</a
								>
							</div>
						</div>
						<div class="-mx-3">
							<button
								type="button"
								class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg/7 font-semibold text-gray-900 hover:bg-gray-50"
								aria-controls="disclosure-1"
								aria-expanded="false"
							>
								Каталог
								<svg
									class="size-5 flex-none"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
								>
									<path
										fill-rule="evenodd"
										d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>

							<!--  -->

							<div class="">
								{#each data as catalog}
									<DropdownMenu.Root>
										<DropdownMenu.Trigger
											><span
												class="ml-3 flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-sky-700 hover:bg-gray-50"
											>
												{catalog.value}
												<svg
													class="size-5 flex-none"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													data-slot="icon"
												>
													<path
														fill-rule="evenodd"
														d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
														clip-rule="evenodd"
													/>
												</svg>
											</span>
										</DropdownMenu.Trigger>
										<DropdownMenu.Content
											class="w-full max-w-[229px] rounded-xl border border-muted bg-background px-1 py-1.5 shadow-popover"
											sideOffset={8}
										>
											<DropdownMenu.Item
												class="rounded-button flex h-10 select-none items-center py-3 pl-3 pr-1.5 text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-muted"
											>
												<div class="flex items-center">Profile</div>
											</DropdownMenu.Item>

											<DropdownMenu.Separator class="my-1 -ml-1 -mr-1 block h-px bg-muted" />

											<DropdownMenu.Sub>
												<DropdownMenu.SubTrigger
													class="rounded-button flex h-10 select-none items-center py-3 pl-3 pr-1.5 text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-muted data-[state=open]:bg-muted"
												>
													<div class="flex items-center">Invite users</div>
													<div class="ml-auto flex items-center gap-px"></div>
												</DropdownMenu.SubTrigger>
												<DropdownMenu.SubContent
													class="w-full max-w-[209px] rounded-xl border border-muted bg-background px-1 py-1.5 shadow-popover !ring-0 !ring-transparent"
													sideOffset={10}
												>
													<DropdownMenu.Item
														class="rounded-button flex h-10 select-none items-center py-3 pl-3 pr-1.5 text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-muted"
													>
														@huntabyte
													</DropdownMenu.Item>
												</DropdownMenu.SubContent>
											</DropdownMenu.Sub>
										</DropdownMenu.Content>
									</DropdownMenu.Root>
								{/each}
							</div>

							<!-- 'Product' sub-menu, show/hide based on menu state. -->
							<div class=" mt-2 space-y-2" id="disclosure-1">
								{#each data as catalog}
									<button
										type="button"
										class="ml-3 flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-sky-700 hover:bg-gray-50"
										aria-controls="disclosure-1"
										aria-expanded="false"
									>
										{catalog.value}
										<svg
											class="size-5 flex-none"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
											data-slot="icon"
										>
											<path
												fill-rule="evenodd"
												d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
												clip-rule="evenodd"
											/>
										</svg>
									</button>
									<!-- 'Product' sub-menu, show/hide based on menu state. -->
									<div class="mt-3 space-y-2 rounded-lg bg-gray-100/50" id="disclosure-1">
										{#each catalog.rubric as category}
											<a
												href="/"
												class="ml-3 block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
												>{category.value}</a
											>
										{/each}
									</div>
								{/each}
							</div>
						</div>

						<div class="-mx-3">
							<button
								type="button"
								class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg/7 font-semibold text-gray-900 hover:bg-gray-50"
								aria-controls="disclosure-2"
								aria-expanded="false"
							>
								Информация
								<!--
                    Expand/collapse icon, toggle classes based on menu open state.
  
                    Open: "rotate-180", Closed: ""
                  -->
								<svg
									class="size-5 flex-none"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
								>
									<path
										fill-rule="evenodd"
										d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
							<!-- 'Company' sub-menu, show/hide based on menu state. -->
							<div class="mt-2 hidden space-y-2" id="disclosure-2">
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>О компании</a
								>
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Партнёрство</a
								>
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Отзывы</a
								>
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Рассрочка</a
								>
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Гарантии</a
								>
								<a
									href="/"
									class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Контакты</a
								>
							</div>
						</div>
					</div>
					<div class="py-6">
						<!-- <p
						class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
					>
						Москва и МО
					</p> -->
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
							>Акции</a
						>
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
							>Блог</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
