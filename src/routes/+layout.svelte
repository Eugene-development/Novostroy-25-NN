<script>
	import '../app.css';
	let { children } = $props();

	import { Banner } from '$lib/UI';
</script>

<Banner/>
{@render children()}
