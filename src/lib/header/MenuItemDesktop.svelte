<script lang="ts">
  import type { MenuItem } from '$lib/models/all';
  import { slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import { clickOutside } from '$lib/utils/backclick';

  export let item: MenuItem;
  let expanded = false;

  const toggle = () => {
    expanded = !expanded;
  };

  const close = () => {
    expanded = false;
  };
</script>

{#if !item.children}
  <a href={item.link} class="text-sm font-semibold leading-6 text-gray-900">{item.title}</a>
{:else}
  <div class="relative" use:clickOutside on:click_outside={close}>
    <button
      type="button"
      class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
      aria-expanded="false"
      on:click={toggle}
    >
      {item.title}
      <svg
        class="h-5 w-5 flex-none text-gray-400"
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
        transition:slide={{ duration: 200, easing: cubicInOut }}
        class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5"
      >
        <div class="">
          {#each item.children as child}
            <div
              class="group relative flex items-center gap-x-6 rounded-sm p-4 text-sm leading-6 hover:bg-gray-50"
            >
              <div
                class="flex h-11 w-11 flex-none items-center justify-center rounded-sm bg-gray-50 group-hover:bg-white"
              >
                <svg
                  class="h-6 w-6 text-gray-600 group-hover:text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                  />
                </svg>
              </div>
              <div class="flex-auto">
                <a
                  href={item.link + child.link}
                  on:click={close}
                  class="block font-semibold text-gray-900"
                >
                  {child.title}
                  <span class="absolute inset-0" />
                </a>
                <p class="mt-1 text-gray-600">{child.desc}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
{/if}
