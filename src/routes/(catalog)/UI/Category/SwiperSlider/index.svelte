<script>
import { Splide, SplideSlide } from '@splidejs/svelte-splide';
import '@splidejs/svelte-splide/css';


let { data } = $props();
</script>

<Splide aria-label="Проекты">
    {#each data as item}
      <SplideSlide>
        <img src={`${import.meta.env.VITE_S3}/catalog/${item.hash}`} alt="Выполненный проект" class="w-full h-80 object-contain"/>
      </SplideSlide>
    {/each}
  </Splide>


