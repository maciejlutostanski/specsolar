<script lang="ts">
  import PocketBase from 'pocketbase';

  const pb = new PocketBase('https://sprzedawca.specsolar.pl/api');
  const initForm = {
    name: null,
    surname: null,
    email: null,
    phone: null,
    message: null
  };
  let data = { ...initForm };
  let messageSent = false;

  const sendMessage = async () => {
    try {
      const record = await pb.collection('contact').create(data);
      messageSent = true;
    } catch (err) {
      alert('Coś poszło nie tak, spróbuj ponownie.');
    }
  };
</script>

<svelte:head>
  <title>Kontakt | Specsolar.pl</title>
  <meta name="description" content="Opis musi być" />
</svelte:head>

<div class="relative isolate bg-white">
  <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
    <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
      <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">Kontakt</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Zadzwoń lub napisz do nas wiadomość Zamów bezpłatny audyt fotowoltaiczny (analiza
          możliwości montażu instalacji oraz dobór jej mocy) lub zadaj inne, dowolne pytanie - na
          każdą wiadomość odpowiadamy w ciągu 24 godzin.
        </p>
        <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Address</span>
              <svg
                class="h-7 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
            </dt>
            <dd>ul. Nowa 4<br />26-601 Wacyn</dd>
          </div>
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Telefon</span>
              <svg
                class="h-7 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </dt>
            <dd>
              <a class="hover:text-gray-900" href="tel:+48 796 555 271">+48 796 555 271</a>
            </dd>
          </div>
          <div class="flex gap-x-4">
            <dt class="flex-none">
              <span class="sr-only">Email</span>
              <svg
                class="h-7 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </dt>
            <dd>
              <a class="hover:text-gray-900" href="mailto:biuro@specsolar.pl">biuro@specsolar.pl</a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 relative">
      {#if messageSent}
        <div class="h-full flex items-center">
          <div class="px-12">
            <div
              class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
            >
              <svg
                class="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                Wysłano wiadomość
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Czekaj na wiadomość, niedługo odezwie się do Ciebie nasza obsługa klienta.
                </p>
              </div>
            </div>
          </div>
        </div>
      {:else}
        <form on:submit={sendMessage}>
          <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900"
                  >Imię</label
                >
                <div class="mt-2.5">
                  <input
                    type="text"
                    name="first_name"
                    id="first-name"
                    autocomplete="given-name"
                    bind:value={data.name}
                    class="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900"
                  >Nazwisko</label
                >
                <div class="mt-2.5">
                  <input
                    type="text"
                    name="last_name"
                    id="last-name"
                    autocomplete="family-name"
                    bind:value={data.surname}
                    class="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-semibold leading-6 text-gray-900"
                  >Email</label
                >
                <div class="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    bind:value={data.email}
                    class="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="phone-number"
                  class="block text-sm font-semibold leading-6 text-gray-900">Numer telefonu</label
                >
                <div class="mt-2.5">
                  <input
                    type="tel"
                    name="phone_number"
                    id="phone-number"
                    autocomplete="tel"
                    bind:value={data.phone}
                    class="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900"
                  >Wiadomość</label
                >
                <div class="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    bind:value={data.message}
                    class="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div class="mt-8 flex justify-end">
              <button
                type="submit"
                class="rounded-sm bg-primary-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >Wyślij</button
              >
            </div>
          </div>
        </form>
      {/if}
    </div>
  </div>
</div>
