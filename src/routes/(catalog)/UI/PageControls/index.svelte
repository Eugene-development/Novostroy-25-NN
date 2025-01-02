<script>
    import BreadCrumbs from './BreadCrumbs/index.svelte';
    import OrderInfo from './OrderInfo/index.svelte';
    import Filter from './Filter/index.svelte';

   
	let { data } = $props();

</script>


<div class="hidden md:block divide-y divide-gray-200 rounded-lg border border-gray-100 bg-white px-4 py-3 md:px-4 md:py-3 shadow-sm">
    <div class="items-center justify-between md:flex">
      <BreadCrumbs data={data} />
      <OrderInfo />
    </div>
    <!-- <Filter />  -->
  </div>