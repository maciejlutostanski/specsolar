<script lang="ts">
  import FaqItem from './FaqItem.svelte';
  import type { FaqItemType } from './models/all';

  export let title = '';
  export let data: FaqItemType[] = [];
</script>

<div class="bg-white">
  <div class="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
    <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
        {title}
      </h2>
      <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
        {#each data as item}
          <FaqItem data={item} />
        {/each}
      </dl>
    </div>
  </div>
</div>
