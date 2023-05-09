<script lang="ts">
  import { fade } from 'svelte/transition';
  import { beforeNavigate } from '$app/navigation';
  import type { MenuItem } from './models/all';
  import MenuItemDesktop from './header/MenuItemDesktop.svelte';
  import MenuItemMobile from './header/MenuItemMobile.svelte';

  let expanded = false;
  const menu: MenuItem[] = [
    { title: 'O nas', link: '/o-nas' },
    {
      title: 'Oferta',
      link: '/oferta',
      children: [
        { title: 'Fotowoltaika', link: '', desc: '' },
        { title: 'Pompy ciepła', link: '', desc: '' },
        { title: 'Klimatyzatory', link: '', desc: '' },
        { title: 'Magazyny energii', link: '', desc: '' },
        { title: 'Rekuperacja', link: '', desc: '' }
      ]
    },
    { title: 'Dotacje', link: '/dotacje' },
    { title: 'Kontakt', link: '/kontakt' },
    { title: 'Konsultacje', link: '/konsultacje' }
  ];

  let toggle = () => {
    expanded = !expanded;
  };

  beforeNavigate(() => {
    expanded = false;
  });
</script>

<header class="bg-white">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <a href="/" class="-m-1.5 p-1.5">
      <span class="sr-only">Specsolar</span>
      <img class="h-8 w-auto" src="/images/logo.png" alt="" />
    </a>
    <div class="flex lg:hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        on:click={toggle}
      >
        <span class="sr-only">Otwórz</span>
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      {#each menu as item}
        <MenuItemDesktop {item} />
      {/each}
    </div>
  </nav>

  {#if expanded}
    <div class="lg:hidden" role="dialog" aria-modal="true" transition:fade={{ duration: 200 }}>
      <div class="fixed inset-0 z-10 bg-black opacity-25" on:click={toggle} on:keypress={toggle} />
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Specsolar</span>
            <img class="h-8 w-auto" src="/images/logo.png" alt="Logo specsolar" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" on:click={toggle}>
            <span class="sr-only">Zamknij menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              {#each menu as item}
                <MenuItemMobile {item} />
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>
