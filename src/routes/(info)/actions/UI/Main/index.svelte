<script>
	const consultations = [
		{
			title: 'Консультация дизайнера',
			desc: 'Наш специалист бесплатно приедет к вам на объект в пределах города и даст подробную консультацию.'
		},
		{
			title: 'Замер помещения',
			desc: 'Осуществим замер с указанием углов, розеток и вывода воды. Его стоимость вычтем из договора.'
		},
		{
			title: 'Установка техники',
			desc: 'При приобретении у нас бытовой техники мы подключим её к комуникациям за счёт компании.'
		},
		{
			title: 'Дизайн-проект',
			desc: 'Дизайнер бесплатно составит проект мебели в соответствии с замером и вашими пожеланиями.'
		},
		{
			title: 'Техника в подарок',
			desc: 'Предложим вам в подарок каждую пятую позицию бытовой техники, приобретённую у нас.'
		},
		{
			title: 'Сборка мебели',
			desc: 'Осуществим сборку нашими квалифицированными специалистами и оплатим их работу.'
		},
		{
			title: 'Особое предложение',
			desc: 'Если вы приобретаете мебель повторно, то для вас будет особое предложение в виде скидки или подарка.'
		},
		{
			title: 'Скидки за большой заказ',
			desc: 'Если вы заказываете несколько позиций мебели, то мы обязательно согласуем вам дополнительную скидку.'
		},
		{
			title: 'Такси до дома',
			desc: 'После оформления договора вызовем вам такси в пределах города за счет нашей компании.'
		}
	];
</script>

<section class="my-12 bg-white animate-fade animate-duration-500 animate-ease-in-out">
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
		<div class="mx-auto mb-12 max-w-screen-sm text-center">
			<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
				Акции, скидки и подарки
			</h2>
			<p class="mb-3 font-light text-gray-500 sm:text-xl">
				Получите актуальные акции наших партнеров и узнайте о подарках и скидках на товары
			</p>
		</div>
		<div class=" grid gap-8 lg:grid-cols-3">
			{#each consultations as consultation}
				<div class="w-full py-2">
					<div class="scale110 relative mx-auto h-72 max-w-xl sm:h-52">
						<!-- <div
							class=" absolute -top-4 size-full scale-x-90 scale-y-[1.15] rounded-xl border border-gray-200 bg-gray-50"
							style="transform-origin: top center"
						></div> -->
						<div
							class="absolute flex size-full items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 shadow-[0px_0px_24px_rgba(39,39,42,0.2)] md:p-6"
							style="transform-origin: top center"
						>
							<div>
								<div class="mb-1 flex items-center gap-2">
									<!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-red-500 text-pink-500">
									<path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
								  </svg> -->

									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										class="size-7 text-red-800"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
										/>
									</svg>

									<h3 class=" text-xl font-bold text-gray-900">
										{consultation.title}
									</h3>
								</div>
								<p class="mt-4 text-gray-700">
									{consultation.desc}
								</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<div class="relative overflow-hidden py-24">
	<div class="mx-auto max-w-5xl px-6 lg:px-8">
		<img
			alt="Акция"
			src="https://storage.yandexcloud.net/mine2024/novostroy/site/actionfoto.png"
			width={2432}
			height={1442}
			class="mb-[-8%] h-[12rem] rounded-xl md:h-[34rem]"
		/>
		<div aria-hidden="true" class="relative">
			<div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"></div>
		</div>
	</div>
</div>
