<script>
    const incentives = [
		{
		  name: "3D-визуализация",
		  imageSrc:
		    "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
		  description:
		    "Фотореалистичные и продуманные изображения вашего будущего интерьера",
		},
		{
		  name: "Рекомендации",
		  imageSrc:
		    "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
		  description:
		    "Профессиональные советы по оформлению пространства и подбору материалов",
		},
		{
		  name: "Стиль",
		  imageSrc:
		    "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
		  description:
		    "Гармоничное сочетание элементов в будущем интерьере и выбранных цветов",
		},
	];
</script>

<div class="mx-auto max-w-7xl py-16 sm:px-2 sm:py-24 lg:px-4">
    <div class="mx-auto max-w-4xl px-4 lg:max-w-none">
        <div class=" grid grid-cols-1 gap-x-8 gap-y-10 border-t pt-8 sm:pt-16 lg:grid-cols-3">
            {#each incentives as incentive}
                <div>
                    <div class="sm:flex lg:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            class="size-8 text-sky-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                            />
                        </svg>
                    </div>
                    <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                        <h3 class="text-base font-bold text-gray-700 sm:text-lg">
                            {incentive.name}
                        </h3>
                        <p class="mt-2 text-sm leading-6 text-gray-700 sm:text-base">
                            {incentive.description}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>