<script>
	import { visibleConsultationForm } from '$lib/state/formConsultation.svelte';
</script>


 <div class="animate-fade  animate-duration-[4000ms]">
	<div class="relative isolate overflow-hidden pt-14">
		<!-- <img
			src="https://storage.yandexcloud.net/mine2024/novostroy/site/slider/cam-1-1600x1472.jpg"
			alt="Кухонный гарнитур"
			class="absolute inset-0 -z-10 size-full animate-fade object-cover animate-delay-500 animate-duration-[3000ms] grayscale"
		/> -->
		<img
			src="https://storage.yandexcloud.net/mine2024/novostroy/catalog/c8dbd6a37c3abb7bcc60eabf2dda8635.jpg"
			alt="Кухонный гарнитур"
			class="absolute inset-0 -z-10 size-full animate-fade object-cover animate-delay-500 animate-duration-[3000ms]" 
		/>
		<!-- <img
			src="https://zovofficial.com/image/cache/catalog/products/kuhni/2023/berkli-24/cam-1-1087x890.jpg"
			alt="Кухонный гарнитур"
			class="absolute inset-0 -z-10 size-full animate-fade object-cover animate-delay-500 animate-duration-[3000ms] grayscale" 
		/> -->

		<div class="absolute inset-0 -z-10 bg-black/60"></div>
		<div class="mx-auto  ">
			<div class="mx-auto max-w-7xl py-32 sm:py-40 lg:py-48 ">
				<div class="animate-duration-10000 animate-fade-up  animate-ease-in-out  -mt-20">

					<section class="bg-white dark:bg-gray-900 rounded-lg">
						<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
							<a href="/blog" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-sky-100/20 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" >
								<span class="text-xs bg-primary-600 rounded-full text-red-700 px-4 py-1.5 mr-3">Это интересно</span> <span class="text-sm font-medium">Познакомьтесь с нашим блогом</span> 
								<svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
							</a>
							<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Мебель, столешницы и техника</h1>
							<p class="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-24 dark:text-gray-400">Профессиональный дизайнер создаст для вас проект мебели по вашим размерам, согласует
								его с фабрикой, а также подберёт столешницу, бытовую технику и аксессуары. Это поможет
								оптимизировать ваши затраты и сэкономить время на поиске лучших решений.</p>
							<div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
								<a href="/actions" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-red-700 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
									Наши акции
									<svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
								</a>
								<button on:click={() => (visibleConsultationForm.value = true)} class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
									Бесплатный проект и просчёт
								</button>  
							</div>
							<div class="px-4 mx-auto text-center  ">
								<!-- <span class="font-semibold text-gray-400 uppercase">В сотрудничестве с</span> -->
									<div class="mx-auto max-w-7xl px-6 lg:px-8 bg-white mt-8 rounded-lg">
										<div
											class="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none"
										>
											<a href="https://zov.top/" target="_blank">
												<img
													class="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
													src="https://storage.yandexcloud.net/zovrus/brand/logo-rus-x2.png"
													alt="ЗОВ"
												/>
											</a>
								
											<a href="https://www.stilkuhni.ru/" target="_blank">
												<img
													class="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
													src="https://avatars.mds.yandex.net/i?id=ada48033e9cfa95f38d69fc9ae7b5bcc25b72f13-5037427-images-thumbs&n=13"
													alt="Стильные кухни"
												/>
											</a>
											<a href="https://www.marya.ru/" target="_blank">
												<img
													class="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
													src="https://avatars.mds.yandex.net/i?id=b761d395235060d89bd5d574233ee6bca202edcb-2037526-images-thumbs&n=13"
													alt="Мария"
												/>
											</a>
											<a href="https://www.mrdoors.ru/" target="_blank">
												<img
													class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
													src="https://avatars.mds.yandex.net/i?id=cf4673eacc853d6f062852c16c8f10af8dd28ace-7909006-images-thumbs&n=13"
													alt="Мистер Дорс"
												/>
											</a>
											<a href="https://www.kuxni.net/" target="_blank">
												<img
													class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
													src="https://avatars.mds.yandex.net/i?id=a74ec62d72576744e414d4b9ac3b0455aa296a51-4477047-images-thumbs&n=13"
													alt="Кухонный двор"
												/>
											</a>
											<a href="https://www.aristo.ru" target="_blank">
												<img
													class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
													src="https://www.aristo.ru/include/logo_header.png"
													alt="Аристо"
												/>
											</a>
										</div>
									</div>
								
							</div> 
						</div>
					</section>
					<!-- <div class="z-50 flex flex-col items-center justify-center">
						<div
							class="bg-gradient-to-b from-neutral-100 to-neutral-200 bg-clip-text  text-center  font-semibold text-transparent "
						>
							<h1>
								<span class="text-5xl sm:text-6xl md:text-8xl">Новострой</span>
								<br />
								<span class="text-3xl sm:text-6xl md:text-7xl">мебель и аксессуары</span>
							</h1>
						</div>
						<div class="animate-fade-up animate-delay-200 animate-ease-in-out bg-black/10 rounded-3xl p-8 mt-12">
							<h2
							class="max-w-2xl px-3 text-center text-sm font-extralight tracking-wide text-neutral-800 md:hidden xl:max-w-4xl xl:text-lg"
						>
							Бесплатная консультация профессионального дизайнера, замер помещения и дизайн-проект.
						</h2>

						<h2
							class="hidden max-w-2xl px-8 text-center text-sm font-extralight tracking-wide text-neutral-100 md:block xl:max-w-4xl xl:text-2xl"
						>
							Бесплатная консультация, замер и дизайн-проект.
						</h2>

						<p
							class="mt-2 hidden max-w-3xl  text-center font-extralight tracking-wide text-neutral-100 md:block xl:max-w-4xl xl:text-lg"
						>
							Профессиональный дизайнер создаст для вас проект мебели по вашим размерам, согласует
							его с фабрикой, а также подберёт столешницу, бытовую технику и аксессуары. Это поможет
							оптимизировать ваши затраты и сэкономить время на поиске лучших решений.
						</p>
						<div class="flex flex-col items-center justify-center">
							<button 
							onclick={() => (visibleConsultationForm.value = !visibleConsultationForm.value)}
							class="scale110 relative  mt-8 rounded-full border border-sky-500/20 bg-sky-700/50 px-12 py-2 text-center text-white backdrop-blur-sm sm:py-4"
						>
							<span class="mt-6 text-xs sm:text-lg mr-2"> Бесплатный проект и просчёт  </span> →
							<div
								class="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent"
							></div>
						</button>


						</div>

						
						</div>
						
					</div> -->
				</div>
			</div>
		</div>
	</div>
</div>
