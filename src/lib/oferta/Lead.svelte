<script lang="ts">
  import type { LeadType } from '$lib/models/all';

  export let category = 'Oferta';
  export let data: LeadType;
</script>

<div
  class="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-16 lg:overflow-visible lg:px-0"
>
  <div
    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
  >
    <div
      class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
    >
      <div class="lg:pr-4">
        <div class="lg:max-w-lg">
          <p class="text-base font-semibold leading-7 text-primary-500">{category}</p>
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data.title}
          </h1>
          <p class="mt-6 text-xl leading-8 text-gray-700">
            {data.subtitle}
          </p>
        </div>
      </div>
    </div>
    <div
      class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
    >
      <img class="w-[48rem] max-w-none rounded shadow-xl sm:w-[57rem]" src={data.imageUrl} alt="" />
    </div>
    <div
      class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
    >
      <div class="lg:pr-4">
        <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
          <p>
            {data.desc}
          </p>
          <ul class="mt-8 space-y-8 text-gray-600">
            {#each data.points as point}
              <li class="flex gap-x-3">
                <svg
                  class="mt-1 h-5 w-5 flex-none text-primary-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <circle cx="10" cy="10" r="7" />
                </svg>
                <span
                  ><strong class="font-semibold text-gray-900">{point.name}</strong>
                  {point.desc}</span
                >
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
