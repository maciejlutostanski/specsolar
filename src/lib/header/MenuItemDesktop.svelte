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
        class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5"
      >
        <div class="">
          {#each item.children as child}
            <div
              class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
            >
              <div
                class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
              >
                <svg
                  class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
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
                <a href={item.link + child.link} on:click={close} class="block font-semibold text-gray-900">
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

    <!-- <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
        <a
          href="#"
          class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
        >
          <svg
            class="h-5 w-5 flex-none text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
              clip-rule="evenodd"
            />
          </svg>
          Watch demo
        </a>
        <a
          href="#"
          class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
        >
          <svg
            class="h-5 w-5 flex-none text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
              clip-rule="evenodd"
            />
          </svg>
          Contact sales
        </a>
      </div> -->
  </div>
{/if}
