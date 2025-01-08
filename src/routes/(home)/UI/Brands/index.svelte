<script>
    import Marquee from "./Marquee.svelte";
    import Reviewcard from "./Reviewcard.svelte";
  
    const reviews = [
      {
        name: "БЛЮМ",
        username: "Фурнитура",
        body: "ТЕСТ3",
        img: "https://avatar.vercel.sh/jack",
      },
    ];
  
    let firstRow = reviews.slice(0, reviews.length / 2);
    let secondRow = reviews.slice(reviews.length / 2);
  </script>
  
  <div
    class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl"
  >
    <Marquee pauseOnHover class="[--duration:20s]">
      {#each firstRow as item}
        <Reviewcard {...item} />
      {/each}
    </Marquee>
    <Marquee reverse pauseOnHover class="[--duration:20s]">
      {#each secondRow as item}
        <Reviewcard {...item} />
      {/each}
    </Marquee>
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
    ></div>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
    ></div>
  </div>
  