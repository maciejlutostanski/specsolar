<script lang="ts">
  import Faq from '$lib/Faq.svelte';
  import type { FaqItemType } from '$lib/models/all';

  const faq: FaqItemType[] = [
    {
      question: 'Czy "SpecSolar" może złożyć w moim imieniu wniosek o dotację ?',
      answer:
        'Tak, możemy złożyć wniosek o dotację w imieniu Inwestora, pod warunkiem udzielenia nam odpowiedniego pełnomocnictwa.'
    },
    {
      question: 'Jakie dokumenty wymagane są do złożenia wniosku?',
      answer: `
- Pełnomocnictwo (Jeśli wniosek o dotacje ma złożyć firma wykonawcza)
- Faktury i potwierdzenia zapłaty.
- Potwierdzenie przyjęcia zgłoszenia (wniosku) o przyłączenie mikroinstalacji fotowoltaicznej do sieci elektroenergetycznej wydane przez Operatora Sieci Dystrybucyjnej i zaświadczenie / oświadczenie potwierdzające rozliczanie się Wnioskodawcy za wytworzoną/pobraną energię elektryczną na zasadach systemu tzw. net-billing, podpisany przez Wnioskodawcę lub przedstawiciela sprzedawcy energii elektrycznej.
- Zaświadczenie potwierdzające przyłączenie mikroinstalacji – dla prosumenta.
- Protokół odbioru prac od wykonawcy lub oświadczenie Wnioskodawcy dotyczące samodzielnego montażu dodatkowych elementów (magazyn ciepła, magazyn energii elektrycznej, system zarządzania energią HEMS/ EMS)
- Dokument potwierdzający zgłoszenie do właściwego Operatora Sieci Dystrybucyjnej (OSD) montażu / uruchomienia magazynu energii elektrycznej.
- Numer konta bankowego.`
    },
    {
      question: 'Na co przeznaczona jest dotacja? Jaką kwotę można uzyskać?',
      answer: `
Instalacje fotowoltaiczne w systemie net-billing:
- dofinansowanie do samej instalacji fotowoltaicznej: do 6 000 zł
- dofinansowanie do instalacji fotowoltaicznej przy zakupie innych elementów: do 7 000 zł, dodatkowo dofinansowanie do magazynu energii elektrycznej do 16 000 zł, magazynu ciepła do 5 000 zł, dofinansowanie do inteligentnych systemów zarządzania energią HEMS/EMS do 3 000 zł.

Instalacje fotowoltaiczne w systemie net-metering po przejściu na net-billing bez wcześniejszego wsparcia finansowego:
* dofinansowanie do samej instalacji fotowoltaicznej: do 6 000 zł
* dofinansowanie do instalacji fotowoltaicznej przy zakupie innych elementów: do 7 000 zł, dodatkowo dofinansowanie do magazynu energii elektrycznej do 16 000 zł, magazynu ciepła do 5 000 zł, dofinansowanie do inteligentnych systemów zarządzania energią HEMS/EMS do 3 000 zł.

Instalacje fotowoltaiczne w systemie net-metering po przejściu na net-billing z wcześniejszym wsparciem finansowym:
* dodatkowo dofinansowanie do instalacji fotowoltaicznej: do 4 000 zł
* dofinansowanie do magazynu energii elektrycznej do 16 000 zł, magazynu ciepła do 5 000 zł, dofinansowanie do inteligentnych systemów zarządzania energią HEMS/EMS do 3 000 zł.
    `
    },
    {
      question: 'Czy dotacja jest opodatkowana?',
      answer:
        'Dotacje udzielone w ramach programu Mój Prąd korzystają ze zwolnienia z podatku dochodowego. Oznacza to, że otrzymanych środków podatnik nie jest zobowiązany wykazać w zeznaniu rocznym PIT.'
    },
    {
      question: 'Czy dotacja Mój Prąd łączy się z innymi dotacjami?',
      answer: 'Program Mój Prąd nie łączy się z innymi dotacjami.'
    },
    {
      question: 'Czy dotacja Mój Prąd łączy się z ulgą termomodernizacyjną?',
      answer:
        'Tak, poniesione koszty można odliczyć od podstawy podatku pomniejszając ich wysokość o otrzymaną dotację.'
    },
    {
      question: 'Czy można rozbudować instalację po otrzymaniu dotacji?',
      answer:
        'Można, pod warunkiem, że rozbudowa nie będzie wiązała się z demontażem elementów instalacji, która podlegała dotacji (np. inwertera).'
    },
    {
      question:
        'Czy mogę dwa razy skorzystać z dotacji, jeżeli jestem właścicielem dwóch nieruchomości?',
      answer:
        'Tak, ponieważ dofinansowanie udzielane jest na konkretną instalację podłączoną do licznika dwukierunkowego w danym Punkcie Poboru Energii (PPE).'
    },
    {
      question:
        'Czy skorzystanie z ulgi w podatku rolnym wyklucza skorzystanie z dotacji Mój Prąd?',
      answer:
        'Jeżeli ktoś skorzystał z ulgi w podatku rolnym nie może wnioskować o dotację Mój Prąd.'
    }
  ];
</script>

<svelte:head>
  <title>Mój Prąd | Specsolar.pl</title>
  <meta name="description" content="Program dofinansowania Mój Prąd" />
</svelte:head>

<div>
  <Faq title="Poznaj szczegóły dotacji " data={faq} />
</div>
