<script lang="ts">
  import type { LeadType } from '$lib/models/all';
  import Lead from '$lib/oferta/Lead.svelte';

  const lead: LeadType = {
    imageUrl: '/images/oferta/rekuperacja.png',
    title: 'Rekuperacja',
    subtitle:
      'Pompa ciepła pozwoli Ci ogrzać Twój dom w trakcie zimnych miesięcy oraz schłodzić go, gdy temperatura na zewnątrz da się we znaki domownikom.',
    desc: `Cała instalacja jest bezpiecznym, zamkniętym
            układem, który nie emituje szkodliwych gazów, nie jest narażony na zagotowanie lub zapalenie sadzy
            w kominie, a przede wszystkim jest całkowicie bezobsługowy. Zalety posiadania pompy ciepła w
            gospodarstwie domowym:`,
    points: [
      {
        name: '',
        desc: 'Mniejsze rachunki za ogrzewanie'
      },
      {
        name: '',
        desc: 'Ogrzewanie domu i podgrzewaniu wody przy wykorzystaniu ciepła z powietrza'
      },
      {
        name: '',
        desc: 'Możliwość dofinansowania z Programu Czyste Powietrze czyli wymiany starego źródła ciepła na zakup i montaż pompy ciepła'
      },
      {
        name: '',
        desc: 'Korzystając z ciepła z powietrza chronimy środowisko naturalne zmniejszając emisję CO2 Zapoznaj się z ofertą pomp ciepła w Spec Solar i bądź przygotowany na nową inwestycję!'
      }
    ]
  };
</script>

<svelte:head>
  <title>Rekuperacja | Specsolar.pl</title>
  <meta name="description" content="Opis musi być" />
</svelte:head>

<Lead data={lead} />

<!-- ## JAK DZIAŁA REKUPERACJA?

Rekuperacja to wymuszony obieg powietrza w Twoim domu, który nie wymaga klasycznego komina.
Jest przemyślany, więc działa efektywnie: usuwa powietrze z “brudnych” pomieszczeń jak kuchnia,
garderoba i łazienka oraz wtłacza świeże, przefiltrowane powietrze np. do salonu, sypialni i
przedpokoju.

Rekuperator filtruje powietrza zapewniając jego czystość od drobnoustrojów i pyłów , a specjalny
system pozwala na odzyskanie ciepła z wytłaczanego powietrza, dzięki czemu ogrzewanie jest tańsze
nawet o 50%.

Korzyści z rekuperacji. Po pierwsze… (przykład https://evoenergy.pl/rekuperacja/)

## OSZCZĘDNOŚCI

Rekuperacja to technologia zapewniająca konkretne korzyści, m.in finansowe.

Klasyczna wentylacja grawitacyjna wykorzystuje kanały wentylacyjne, którymi z domu wydostaje się
powietrze nasycone dwutlenkiem węgla. Wraz z tym powietrzem uchodzi również ciepło
wygenerowane przez system ogrzewania – jest to bezsensowna strata odpowiadająca za nawet 50%
ciepłego powietrza opuszczającego dom.

Rekuperator, dzięki specjalnemu wymiennikowi ciepła, odzyskuje ciepło z powietrza zanim pozwoli
mu opuścić dom. Ciepło wraca do pomieszczeń wraz ze świeżym powietrzem.

Po drugie…

## BEZPIECZEŃSTWO.

### TWÓJ ZDROWY DOM.

Rekuperacja wyciąga z domu zużyte powietrze
z zanieczyszczeniami bytowym tj.: Kurz, wilgoć i brzydki zapach, bakterie i wirusy

Po trzecie…

### KOMFORT ŻYCIA

Wentylacja oparta na rekuperacji jest starannie zaprojektowana pod konkretny budynek, dzięki temu
wszystkie pomieszczenia mają zapewniony odpowiedni obieg świeżego powietrza a poziom
dwutlenku węgla jest utrzymywany na bezpiecznym poziomie przez całą dobę.
Świeże powietrze w domu to szereg korzyści dla życia i zdrowia, ale również korzyści dla budynku:
koniec problemów z pleśnią na ścianach i nadmiernym gromadzeniem kurzu.

Budujesz nowy dom?

## REKUPERACJA JEST OBOWIĄŻKOWA ZGODNIEZ WT 2021

Nowe Warunki Techniczne 2021 wprowadzają nowe wymagania względem inwestorów, którzy
dostali pozwolenie na budowę po 1 stycznia 2021 r. Zgodnie z nimi, wszystkie nowe budynki muszą
spełniać znacznie bardziej rygorystyczne warunki wentylacji i utrzymania ciepła budynku.
Rekuperacja gwarantuje zgodność z nowymi normami.

Więcej o wymaganiach względem wentylacji przeczytasz tutaj: https://www.wentylacyjny.pl/2545-
49-234-nowe-warunki-techniczne-2021–wymagania-dla-wentylacji.html -->
