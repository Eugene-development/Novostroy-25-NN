<script>
	import '../app.css';
	let { children } = $props();

	import { Banner } from './layout/header/UI';
</script>

<Banner/>
{@render children()}
