<ul class="mb-6 space-y-3 rounded-xl bg-gray-50/50 px-3 py-6">
	<!-- {dataCatalog?.rubric.map((item) => (
      <li key={item.value}>
        <Button
          onClick={() => toggleSubMenu(item.value)}
          type="button"
          class={`flex items-center py-2 w-full text-base font-semibold tracking-wide text-gray-700 hover:text-gray-950 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
            selectedItem === item.value ? "bg-gray-100" : ""
          }`}
          aria-controls="dropdown-orders"
          data-collapse-toggle="dropdown-orders"
        >
          <span class="flex-1 ml-3 text-left whitespace-nowrap">
            {item.value}
          </span>
          <svg
            aria-hidden="true"
            class={`size-6 text-sky-800 transform transition-transform animate-pulse ${
              currentVisibleSubMenus[item.value] ? "rotate-0" : "-rotate-90"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>

        {currentVisibleSubMenus[item.value] &&
          item.category?.map(
            (subitem) =>
              subitem.is_active && (
                <ul
                  id="dropdown-orders"
                  class="p-2 space-y-2"
                  key={subitem.value}
                >
                  <li
                    class={`flex items-center ${
                      selectedItem === subitem.value
                        ? "bg-gray-100 rounded-lg"
                        : ""
                    }`}
                  >
                    <Link
                      href={`/${dataCatalog.slug}/${item.slug}/${subitem.slug}`}
                      class="flex items-center justify-between p-1 pl-4 w-full text-sm font-medium tracking-wide text-gray-700 hover:text-gray-950 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setSelectedItem(subitem.value)}
                    >
                      {subitem.value}
                      <span class="inline-flex items-center w-5 h-5 text-xs font-semibold rounded-full text-gray-800 dark:bg-primary-200 dark:text-primary-800">
                        {subitem.product_count}
                      </span>
                    </Link>
                  </li>
                </ul>
              ),
          )}
      </li>
    ))} -->
</ul>

<!-- <ul class="py-6 space-y-2 border-t border-gray-200 dark:border-gray-700">
    {[
      { href: "/action", label: "Акции" },
      { href: "/contacts", label: "Контакты" },
      { href: "/favorites", label: "Избранное" },
    ].map(({ href, label }) => (
      <li key={label}>
        <Link
          href={href}
          class="flex items-center p-1 text-sm font-normal tracking-wide text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 group"
        >
          <span class="flex-1 ml-3 whitespace-nowrap">{label}</span>
        </Link>
      </li>
    ))}
  </ul> -->

<div class="border-t border-gray-200 py-6">
	<a
		href="/"
		class="group flex items-center rounded-lg p-1 text-sm font-normal text-sky-800 hover:bg-gray-50 dark:text-sky-500 dark:hover:bg-gray-700"
	>
		<svg
			class="h-6 w-6 flex-shrink-0 text-sky-800 transition duration-75 dark:text-sky-500"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				clipRule="evenodd"
				fillRule="evenodd"
				d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
			></path>
		</svg>
		<span class="ml-3 flex-1 whitespace-nowrap">На главную</span>
	</a>
</div>
