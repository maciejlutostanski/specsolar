<script lang="ts">
  import type { LeadType } from '$lib/models/all';
  import Lead from '$lib/oferta/Lead.svelte';

  const lead: LeadType = {
    imageUrl: '/images/fotowoltaika/frame1.png',
    title: 'Fotowoltaika dla domu',
    subtitle:
      'Zespół Spec Solar tworzą pasjonaci odnawialnych źródeł energii. Zajmujemy się, doborem i montażem instalacji fotowoltaicznych.',
    desc: `W ofercie naszej firmy znajdą państwo instalację fotowoltaiczną dobraną do państwa
            indywidualnych potrzeb. W zależności od mocy elektrowni słonecznej, dobierana jest
            odpowiednia ilość modułów fotowoltaicznych oraz moc inwertera. Zajmujemy się
            kompleksowym montażem oraz obsługą obejmującą najważniejsze obszary:`,
    points: [
      {
        name: 'Audyt',
        desc: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.'
      },
      {
        name: 'Projekt',
        desc: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.'
      },
      {
        name: 'Montaż',
        desc: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.'
      },
      {
        name: 'Finansowanie',
        desc: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.'
      },
      {
        name: 'Konserwacja i utrzymanie',
        desc: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.'
      },
      {
        name: 'Dofinansowanie',
        desc: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.'
      }
    ]
  };
</script>

<svelte:head>
  <title>Fotowoltaika | Specsolar.pl</title>
  <meta name="description" content="Opis musi być" />
</svelte:head>

<Lead data={lead} />

<div class="bg-white py-12 sm:py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Zmniejsz rachunki będąc eco
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Zostań prosumentem i korzystaj z darmowej energii przez cały rok. Zmieniając rachunek za
        prąd na niewielką ratę kredytu, już po kilku latach będziesz się cieszyć niezależnością
        energetyczną.
      </p>
    </div>
    <dl
      class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <div>
        <dt class="font-semibold text-gray-900">Oszczędność na co dzień</dt>
        <dd class="mt-1 text-gray-600">
          Skorzystaj z naszej oferty fotowoltaiki i obniż swoje rachunki za energię nawet do 97%.
        </dd>
      </div>
      <div>
        <dt class="font-semibold text-gray-900">Komfort i wygoda</dt>
        <dd class="mt-1 text-gray-600">
          Systemy fotowoltaiczne są bezobsługowe, a ich wydajność sprawdzisz dzięki specjalnej
          aplikacji.
        </dd>
      </div>
      <div>
        <dt class="font-semibold text-gray-900">Nowoczesne panele fotowoltaiczne</dt>
        <dd class="mt-1 text-gray-600">
          Wysokiej klasy fotowoltaika o dużej wydajności, zapewni Ci energię przez ponad 20 lat.
        </dd>
      </div>
      <div>
        <dt class="font-semibold text-gray-900">Prosty i szybki montaż</dt>
        <dd class="mt-1 text-gray-600">
          Instalacja paneli fotowoltaicznych jest łatwa i nie wymaga dużej ingerencji w konstrukcję
          dachu.
        </dd>
      </div>
      <div>
        <dt class="font-semibold text-gray-900">Kompleksowa obsługa</dt>
        <dd class="mt-1 text-gray-600">
          Zapewnimy Ci profesjonalne doradztwo i wsparcie na każdym etapie współpracy.
        </dd>
      </div>
    </dl>
  </div>
</div>

<div class="bg-white py-12 sm:py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Fotowoltaika dla firmy
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Fotowoltaika dla Twojego przedsiębiorstwa Wiemy jak ważna w prowadzeniu biznesu jest
        optymalizacja kosztów.
      </p>
      <p class="mt-6 leading-8 text-gray-600">
        Dzięki instalacji fotowoltaicznej ograniczysz koszty energii elektrycznej w swojej firmie
        oraz uniezależnisz się od podwyżek cen prądu przez co najmniej 25 lat. Czysta energia
        produkowana przez moduły fotowoltaiczne to również dodatkowy atut dla Ciebie – pokazuje Cię
        jako świadomego i odpowiedzialnego przedsiębiorcę dbającego o środowisko naturalne.
      </p>
    </div>
    <dl
      class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <div>
        <dt class="font-semibold text-gray-900">Oszczędność na co dzień</dt>
        <dd class="mt-1 text-gray-600">
          Skorzystaj z naszej oferty fotowoltaiki i obniż swoje rachunki za energię nawet do 97%.
        </dd>
      </div>
      <div>
        <dt class="font-semibold text-gray-900">Komfort i wygoda</dt>
        <dd class="mt-1 text-gray-600">
          Systemy fotowoltaiczne są bezobsługowe, a ich wydajność sprawdzisz dzięki specjalnej
          aplikacji.
        </dd>
      </div>
      <div>
        <dt class="font-semibold text-gray-900">Nowoczesne panele fotowoltaiczne</dt>
        <dd class="mt-1 text-gray-600">
          Wysokiej klasy fotowoltaika o dużej wydajności, zapewni Ci energię przez ponad 20 lat.
        </dd>
      </div>
      <div>
        <dt class="font-semibold text-gray-900">Prosty i szybki montaż</dt>
        <dd class="mt-1 text-gray-600">
          Instalacja paneli fotowoltaicznych jest łatwa i nie wymaga dużej ingerencji w konstrukcję
          dachu.
        </dd>
      </div>
      <div>
        <dt class="font-semibold text-gray-900">Kompleksowa obsługa</dt>
        <dd class="mt-1 text-gray-600">
          Zapewnimy Ci profesjonalne doradztwo i wsparcie na każdym etapie współpracy.
        </dd>
      </div>
    </dl>
  </div>
</div>

<div class="bg-white py-12 sm:py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dla rolnika</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Rozliczasz się z podatku rolnego? Zgodnie z prawem możesz odliczyć 25% wartości inwestycji w
        Twoją instalację od podatku rolnego!
      </p>
      <p class="mt-6 leading-8 text-gray-500">
        (art. 13 Ustawy o podatku rolnym 2017 (Dz.U. 2016, poz. 617)
      </p>
    </div>
  </div>
</div>
