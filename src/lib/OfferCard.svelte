<script lang="ts">
  export let imageUrl = '';
  export let title = '';
  export let href = '#';
</script>

<a {href}>
  <article
    class=" h-full relative isolate flex flex-col justify-end overflow-hidden rounded px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
  >
    <img src={imageUrl} alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />

    <h3 class="mt-3 text-xl font-semibold leading-6 text-white ">
      <span class="absolute inset-0" />
      {title}
    </h3>
  </article>
</a>
