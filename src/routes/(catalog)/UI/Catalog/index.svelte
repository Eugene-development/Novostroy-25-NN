<script>
	import { PageControls } from '../../UI';
	let { data } = $props();
</script>

<section class="rounded-xl bg-gray-50/50 py-2 antialiased md:py-4">
	<div class="mx-auto max-w-screen-xl">
		<!-- <PageControls {data} /> -->

		<!-- <Button value={"Категории каталога"} />

	  <BreadCrumbs data={dataCatalog} /> -->
		<div class="sm:hidden">
			<!-- <OrderInfo /> -->
		</div>

		<!-- <div class="-mt-10 mx-auto max-w-2xl lg:mx-0"> -->
		<!-- <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
		{data}
	  </h2>  -->

		<!-- </div> -->
	</div>

	<section class="relative isolate overflow-hidden px-4 py-12 sm:py-24 lg:px-8">
		<div class="absolute inset-0 -z-10"></div>
		<div
			class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] shadow-xl shadow-gray-600/10 ring-1 ring-gray-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
		></div>
		<div class="mx-auto max-w-2xl lg:max-w-5xl">
			<p class="ml-0.5 text-base font-semibold leading-7 text-gray-600">Рубрика каталога</p>
			<h1 class=" text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
				{data.value}
			</h1>
			<figure class="mt-8">
				<blockquote
					class="text-pretty text-sm font-semibold leading-6 text-gray-700 sm:text-lg sm:leading-9"
				>
					<div class="*:mt-4">
						{@html data.text?.value}
					</div>
				</blockquote>
				<!-- <figcaption class="mt-10">
				<img
				  alt=""
				  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				  class="mx-auto h-10 w-10 rounded-full"
				/>
				<div class="mt-4 flex items-center justify-center space-x-3 text-base">
				  <div class="font-semibold text-gray-900">Judith Black</div>
				  <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" class="fill-gray-900">
					<circle r={1} cx={1} cy={1} />
				  </svg>
				  <div class="text-gray-600">CEO of Workcation</div>
				</div>
			  </figcaption>  -->
			</figure>
		</div>
	</section>

	<!-- <div class="relative">
		<div class="absolute inset-0 flex items-center" aria-hidden="true">
		  <div class="w-full border-t border-gray-300"></div>
		</div>
		<div class="relative flex justify-center">
		  <span class="bg-white px-3 text-base font-semibold text-gray-900">Категории</span>
		</div>
	  </div> -->
</section>
