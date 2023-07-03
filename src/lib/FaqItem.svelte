<script lang="ts">
  import { slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import type { FaqItemType } from './models/all';
  import SvelteMarkdown from 'svelte-markdown';

  export let data: FaqItemType;

  let extended = false;

  const toggle = () => {
    extended = !extended;
  };
</script>

<div class="pt-6">
  <dt>
    <!-- Expand/collapse question button -->
    <button
      type="button"
      class="flex w-full items-start justify-between text-left text-gray-900"
      aria-controls="faq-0"
      aria-expanded="false"
      on:click={toggle}
    >
      <span class="text-base font-semibold leading-7">{data.question}</span>
      <span class="ml-6 flex h-7 items-center">
        {#if !extended}
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        {:else}
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
          </svg>
        {/if}
      </span>
    </button>
  </dt>
  {#if extended}
    <dd class="pr-12" transition:slide={{ duration: 500, easing: cubicInOut }}>
      <div class="text-base leading-7 prose pt-2">
        <SvelteMarkdown source={data.answer} />
      </div>
    </dd>
  {/if}
</div>
