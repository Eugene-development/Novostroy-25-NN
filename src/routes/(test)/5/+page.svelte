<!-- <script >
    import { Tree } from "melt/builders";
  
    const tree = new Tree();
  </script>
  
  <div {...tree.root}>
    {#each tree.items as item}
      <div {...item.root}>
        <button {...item.trigger}>
          {item.value}
        </button>
        {#if item.children}
          <div {...item.content}>
            {#each item.children as child}
              <div {...child.root}>
                <button {...child.trigger}>
                  {child.value}
                </button>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div> -->
