<script>
import { Splide, SplideSlide } from '@splidejs/svelte-splide';

// Default theme
import '@splidejs/svelte-splide/css';
// or other themes
import '@splidejs/svelte-splide/css/skyblue';
import '@splidejs/svelte-splide/css/sea-green';
// or only core styles
import '@splidejs/svelte-splide/css/core';


let { data } = $props();

</script>
<section class="py-2 w-72 sm:w-full mx-auto">
    <div class="container">
<Splide aria-label="My Favorite Images">

    {#each data as item}
        <SplideSlide>
            <img src={`${import.meta.env.VITE_S3}/catalog/${item.hash}`} alt="Slide showing a placeholder for Slide 1"/>
        </SplideSlide>
    {/each}
   
    
</Splide>

    </div>
</section>