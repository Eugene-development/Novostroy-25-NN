<script>
	import '../app.css';
	let { children } = $props();

	import { Banner } from './layout/header/UI';
	import { Menu } from './layout/header/UI';
	import { Footer } from './layout/footer/UI';

	import { FormConsultation, FormDelivery, FormDesign, FormInstallation, FormMeasuring, FormProject } from './layout/modals';
</script>

<Banner />
<Menu />
{@render children()}
<Footer />

<!-- Modals -->
<FormConsultation />
<FormDelivery />
<FormDesign />
<FormInstallation />
<FormMeasuring />
<FormProject />
