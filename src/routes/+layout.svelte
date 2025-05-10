<script>
	import '../app.css';
	let { children, data } = $props();

	import { Banner } from './layout/header/UI';
	import { Menu } from './layout/header/UI';
	import { Footer } from './layout/footer/UI';

	import {
		CheckCity,
		FormConsultation,
		FormDelivery,
		FormDesignProject,
		FormAssemblyAndInstallation,
		FormMeasuring,
		FormFurnitureProject,
		FormPrice
	} from './layout/modals';
</script>

<Banner />
<Menu data={data.req.catalog_tree} />
{@render children()}
<Footer />

<!-- Modals -->
<CheckCity />
<FormConsultation />
<FormDelivery />
<FormDesignProject />
<FormAssemblyAndInstallation />
<FormMeasuring />
<FormFurnitureProject />
<FormPrice />
