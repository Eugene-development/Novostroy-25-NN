<script>
    /** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
    let { children } = $props();

    import { SideBar } from '../UI';
</script>

<div class="antialised">
    <!-- <Info /> -->
   <!-- <Badge />   -->

    <div class="max-w-full mx-auto flex w-full h-full relative py-1 px-4">
      <SideBar  />
      <!-- <SideBar dataCatalog={data.catalog} /> -->
      {@render children()}
    </div>
  </div>