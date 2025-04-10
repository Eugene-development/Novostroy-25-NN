<script>
	import { sortByULID } from '$lib/utils/ulid.js';

    let { data } = $props();

	let sortedImages = sortByULID(data, 'id', true) ;
    let mainImage = sortedImages[0]


</script>

<img
    class="mx-auto mb-4 h-[20rem] rounded-lg object-contain md:mb-6"
    src={`${import.meta.env.VITE_S3}/catalog/${mainImage.hash}`}
    alt="Избранное"
/>

