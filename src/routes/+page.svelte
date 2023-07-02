<script lang="ts">
  import Cta from '$lib/Cta.svelte';
</script>

<svelte:head>
  <title>Specsolar.pl</title>
  <meta name="description" content="Opis musi być" />
</svelte:head>

<!-- ------------------------------------------------------------------------------------------------------ -->
<div class="relative isolate overflow-hidden bg-slate-600">
  <img
    src="https://specsolar.pl/assets/img/banner1.65512db6.jpg"
    alt=""
    class="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-multiply"
  />
  <div
    class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    aria-hidden="true"
  >
    <div
      class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    />
  </div>
  <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
      <div
        class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20"
      >
        Announcing our next round of funding. <a href="#" class="font-semibold text-white"
          ><span class="absolute inset-0" aria-hidden="true" />Read more
          <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </div>
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Data to enrich your online business
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
        Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          class="rounded-sm bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >Get started</a
        >
        <a href="#" class="text-sm font-semibold leading-6 text-white"
          >Learn more <span aria-hidden="true">→</span></a
        >
      </div>
    </div>
  </div>
  <div
    class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    aria-hidden="true"
  >
    <div
      class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    />
  </div>
</div>

<!-- ------------------------------------------------------------------------------------------------------ -->
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Everything you need to deploy your app
      </p>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a
        elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
      </p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        <div class="flex flex-col">
          <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
            <svg
              class="h-5 w-5 flex-none text-indigo-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                clip-rule="evenodd"
              />
            </svg>
            Push to deploy
          </dt>
          <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p class="flex-auto">
              Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id
              accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula
              sit faucibus.
            </p>
            <p class="mt-6">
              <a href="#" class="text-sm font-semibold leading-6 text-indigo-600"
                >Learn more <span aria-hidden="true">→</span></a
              >
            </p>
          </dd>
        </div>
        <div class="flex flex-col">
          <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
            <svg
              class="h-5 w-5 flex-none text-indigo-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clip-rule="evenodd"
              />
            </svg>
            SSL certificates
          </dt>
          <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p class="flex-auto">
              Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat
              sapien consequat tempor fermentum nibh.
            </p>
            <p class="mt-6">
              <a href="#" class="text-sm font-semibold leading-6 text-indigo-600"
                >Learn more <span aria-hidden="true">→</span></a
              >
            </p>
          </dd>
        </div>
        <div class="flex flex-col">
          <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
            <svg
              class="h-5 w-5 flex-none text-indigo-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                clip-rule="evenodd"
              />
            </svg>
            Simple queues
          </dt>
          <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p class="flex-auto">
              Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse
              iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.
            </p>
            <p class="mt-6">
              <a href="#" class="text-sm font-semibold leading-6 text-indigo-600"
                >Learn more <span aria-hidden="true">→</span></a
              >
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>

<!-- ------------------------------------------------------------------------------------------------------ -->
<div class="bg-white py-12 sm:py-20">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
      Trusted by the world’s most innovative teams
    </h2>
    <div
      class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
    >
      <img
        class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
        alt="Transistor"
        width="158"
        height="48"
      />
      <img
        class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
        alt="Reform"
        width="158"
        height="48"
      />
      <img
        class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
        alt="Tuple"
        width="158"
        height="48"
      />
      <img
        class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
        src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
        alt="SavvyCal"
        width="158"
        height="48"
      />
      <img
        class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
        src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
        alt="Statamic"
        width="158"
        height="48"
      />
    </div>
  </div>
</div>

<Cta />
