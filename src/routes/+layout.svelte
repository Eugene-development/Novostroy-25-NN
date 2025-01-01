<script>
	import '../app.css';
	let { children } = $props();

	import { Banner } from './layout/header/UI';
	import { Menu } from './layout/header/UI';
	import { Footer } from './layout/footer/UI';
</script>

<Banner />
<Menu />

{@render children()}
<Footer />
