<script>
	import '../app.css';
	let { children } = $props();

	import { Banner } from './layout/header/UI';
	import { Footer } from './layout/footer/UI';
</script>

<Banner/>
{@render children()}
<Footer/>
