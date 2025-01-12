<script>
	import { visibleProjectForm } from '$lib/state/formProject.svelte';
</script>

<div class="animate-fade bg-gray-500 animate-duration-[3000ms]">
	<div class="relative isolate overflow-hidden pt-14">
		<img
			src="https://storage.yandexcloud.net/mine2024/novostroy/site/slider/cam-1-1600x1472.jpg"
			alt=""
			class="absolute inset-0 -z-10 size-full animate-fade object-cover animate-delay-500 animate-duration-[3000ms]"
		/>
		<div class="absolute inset-0 -z-10 bg-black/60"></div>
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
				<div class="animate-duration-5000 animate-fade-up animate-delay-200 animate-ease-in-out">
					<div class="z-50 -mt-24 flex flex-col items-center justify-center">
						<div
							class="bg-gradient-to-b from-white to-neutral-400 bg-clip-text py-4 text-center text-3xl font-bold text-transparent md:text-8xl"
						>
							<h1>
								<span class="text-5xl sm:text-6xl md:text-8xl">Мебель</span>

								<br />
								<span class="text-3xl sm:text-6xl md:text-8xl"> для вашего дома </span>
							</h1>
						</div>

						<h2
							class="max-w-2xl px-3 text-center text-sm font-extralight tracking-wide text-gray-100 md:hidden xl:max-w-4xl xl:text-lg"
						>
							Бесплатная консультация профессионального дизайнера, замер помещения и дизайн-проект.
						</h2>

						<h2
							class="hidden max-w-2xl px-8 text-center text-sm font-extralight tracking-wide text-gray-100 md:block xl:max-w-4xl xl:text-lg"
						>
							Бесплатная консультация, замер и дизайн-проект.
						</h2>

						<p
							class="mt-4 hidden max-w-2xl px-1 text-center font-extralight tracking-wide text-gray-100 md:block xl:max-w-4xl xl:text-lg"
						>
							Наш профессиональный дизайнер создаст для вас проект мебели по вашим размерам,
							согласует его с фабрикой, а также подберёт столешницу и аксессуары. Это поможет
							оптимизировать ваши затраты и сэкономить время на поиске лучших решений.
						</p>
						<button
							onclick={() => (visibleProjectForm.value = true)}
							class="scale110 relative mx-4 mt-8 rounded-full border border-sky-500/20 bg-sky-300/10 px-8 py-2 text-center text-white backdrop-blur-sm sm:py-4"
						>
							<span class="mt-6 text-xs sm:text-lg"> Закажите бесплатный проект и просчёт → </span>
							<div
								class="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent"
							></div>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
