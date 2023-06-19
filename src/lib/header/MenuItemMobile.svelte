<script lang="ts">
  import type { MenuItem } from '$lib/models/all';
  import { slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';

  export let item: MenuItem;
  let expanded = false;

  const toggle = () => {
    expanded = !expanded;
  };
</script>

{#if !item.children}
  <a
    href={item.link}
    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    >{item.title}</a
  >
{:else}
  <div class="-mx-3">
    <button
      type="button"
      class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50"
      aria-controls="disclosure-1"
      aria-expanded="false"
      on:click={toggle}
    >
      {item.title}
      <svg
        class="h-5 w-5 flex-none"
        class:rotate-180={expanded}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    {#if expanded}
      <div
        class="mt-2 space-y-2"
        id="disclosure-1"
        transition:slide={{ duration: 200, easing: cubicInOut }}
      >
        {#each item.children as child}
          <a
            href={item.link + child.link}
            class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >{child.title}</a
          >
        {/each}
      </div>
    {/if}
  </div>
{/if}
