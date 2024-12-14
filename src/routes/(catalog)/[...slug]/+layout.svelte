<script>
    /** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
    let { data, children } = $props();
</script>

<p>hhh2</p>
{@render children()}
<p>fff2</p>