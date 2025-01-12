<script>

	const posts = [
		{
			id: 1,
			title: 'Пост 1',
			href: '#',
			preview:
				'Lorem ipsum 1 dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi commo',
			author: {
				name: 'Michael Foster',
				href: '#',
				avatarSrc:
					'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			date: '17 марта, 2020',
			readingTime: '4 мин.',
			category: { title: 'Ремонт', href: '#' },
			thumbnail: 'https://images.unsplash.com/photo-1505751172876-f1f1d2e42f45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
		},
		{
			id: 2,
			title: 'Пост 2',
			href: '#',
			preview:
				'Lorem ipsum 2 dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi commo',
			author: {
				name: 'Michael Foster',
				href: '#',
				avatarSrc:
					'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			date: 'Mar 16, 2020',
			readingTime: '4 min',
			category: { title: 'Дизайн', href: '#' },
			thumbnail: 'https://images.unsplash.com/photo-1505751172876-f1f1d2e42f45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
		},
		{
			id: 3,
			title: 'Пост 1',
			href: '#',
			preview:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi commo',
			author: {
				name: 'Michael Foster',
				href: '#',
				avatarSrc:
					'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			date: 'Mar 16, 2020',
			readingTime: '4 min',
			category: { title: 'Case Studies', href: '#' },
			thumbnail: 'https://images.unsplash.com/photo-1505751172876-f1f1d2e42f45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
		},
		{
			id: 4,
			title: 'Пост 1',
			href: '#',
			preview:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi commo',
			author: {
				name: 'Michael Foster',
				href: '#',
				avatarSrc:
					'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			date: 'Mar 16, 2020',
			readingTime: '4 min',
			category: { title: 'Case Studies', href: '#' },
			thumbnail: 'https://images.unsplash.com/photo-1505751172876-f1f1d2e42f45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
		},
		{
			id: 5,
			title: 'Пост 1',
			href: '#',
			preview:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi commo',
			author: {
				name: 'Michael Foster',
				href: '#',
				avatarSrc:
					'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			date: 'Mar 16, 2020',
			readingTime: '4 min',
			category: { title: 'Case Studies', href: '#' },
			thumbnail: 'https://images.unsplash.com/photo-1505751172876-f1f1d2e42f45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
		},
		{
			id: 6,
			title: 'Пост 1',
			href: '#',
			preview:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi commo',
			author: {
				name: 'Michael Foster',
				href: '#',
				avatarSrc:
					'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			date: 'Mar 16, 2020',
			readingTime: '4 min',
			category: { title: 'Case Studies', href: '#' },
			thumbnail: 'https://images.unsplash.com/photo-1505751172876-f1f1d2e42f45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
		},
		{
			id: 7,
			title: 'Пост 1',
			href: '#',
			preview:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi commo',
			author: {
				name: 'Michael Foster',
				href: '#',
				avatarSrc:
					'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			date: 'Mar 16, 2020',
			readingTime: '4 min',
			category: { title: 'Case Studies', href: '#' },
			thumbnail: 'https://images.unsplash.com/photo-1505751172876-f1f1d2e42f45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
		},
		{
			id: 8,
			title: 'Пост 1',
			href: '#',
			preview:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi commo',
			author: {
				name: 'Michael Foster',
				href: '#',
				avatarSrc:
					'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			date: 'Mar 16, 2020',
			readingTime: '4 min',
			category: { title: 'Case Studies', href: '#' },
			thumbnail: 'https://images.unsplash.com/photo-1505751172876-f1f1d2e42f45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
		},
		{
			id: 9,
			title: 'Пост 1',
			href: '#',
			preview:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi commo',
			author: {
				name: 'Michael Foster',
				href: '#',
				avatarSrc:
					'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			date: 'Mar 16, 2020',
			readingTime: '4 min',
			category: { title: 'Case Studies', href: '#' },
			thumbnail: 'https://images.unsplash.com/photo-1505751172876-f1f1d2e42f45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
		},
		{
			id: 10,
			title: 'Пост 1',
			href: '#',
			preview:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi commo',
			author: {
				name: 'Michael Foster',
				href: '#',
				avatarSrc:
					'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			date: 'Mar 16, 2020',
			readingTime: '4 min',
			category: { title: 'Case Studies', href: '#' },
			thumbnail: 'https://images.unsplash.com/photo-1505751172876-f1f1d2e42f45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
		},
	];

</script>


<div
	class=" animate-ease-in-outsm:py-32 animate-fade bg-white py-24 animate-duration-500 animate-once"
>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
				Наш Блог
			</h2>
			<p class="mt-2 text-lg/8 text-gray-600">
				Получайте полезные советы и новости от наших специалистов.
			</p>
		</div>
		<div
			class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
		{#each posts as post} 
			<article class="flex max-w-xl flex-col items-start justify-between border-b border-gray-200 pb-10">
				<div class="flex items-center gap-x-4 text-xs">
					<time datetime="2020-03-16" class="text-gray-500">{post.date}</time>
					<a
						href="/post/category/1"
						class="relative z-10 rounded-full bg-gray-50 px-4 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
						>{post.category.title}</a
					>
				</div>
				<div class="group relative">
					<h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
						<a href="/post/{post.id}">
							<span class="absolute inset-0"></span>
							{post.title}
						</a>
					</h3>
					<p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
						{post.preview}
					</p>
				</div>
				<div class="relative mt-8 flex items-center gap-x-4">
					<!-- <img
						src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
						class="size-10 rounded-full bg-gray-50"
					/> -->
					<div class="text-sm/6">
						<p class="font-semibold text-gray-900">
							<a href="/post/1">
								<span class="absolute inset-0"></span>
								Время чтения
							</a>
						</p>
						<p class="text-gray-600">{post.readingTime}</p>
					</div>
				</div>
			</article>
		{/each}
		</div>
	</div>
</div>
