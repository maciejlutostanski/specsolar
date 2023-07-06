<script lang="ts">
  import Cta from '$lib/Cta.svelte';
  import Faq from '$lib/Faq.svelte';
  import SubsidyHeader from '$lib/SubsidyHeader.svelte';
  import type { FaqItemType } from '$lib/models/all';

  const faq: FaqItemType[] = [
    {
      question: 'Dla kogo przeznaczone jest dofinansowanie?',
      answer:
        'Dotacja dla właścicieli / współwłaścicieli jednorodzinnego budynku mieszkalnego, w którym została przeprowadzona termomodernizacja.'
    },
    {
      question: 'Na co przeznaczona jest dotacja? Jaką kwotę można uzyskać?',
      answer: `
Dotacja dzieli się na dwa poziomy:

- Podstawowy - Przeznaczony dla osób, których dochód roczny nie przekracza 135000 zł (dochód tylko wnioskodawcy, niezależnie od ilości zamieszkujących osób)
- Podwyższony- Przeznaczony dla osób, których dochód miesięczny nie przekracza:
  1894 zł netto /os. w gospodarstwie wieloosobowym.<br>
  2651 zł netto /os. w gospodarstwie jednoosobowym.<br>
- Najwyższy- Przeznaczony dla osób, których dochód miesięczny nie przekracza:
  1090 zł netto /os. w gospodarstwie wieloosobowym.<br>
  1520 zł netto /os. w gospodarstwie jednoosobowym.<br>      
      `
    },
    {
      question: 'Do kiedy trwa nabór wniosków?',
      answer: 'Nabór trwa od 15.05.2020r i prowadzony jest w trybie ciągłym.'
    },
    {
      question: 'Czy "SpecSolar" może złożyć w moim imieniu wniosek o dotację?',
      answer: 'Tak, możemy złożyć wniosek elektroniczny poprzez profil beneficjenta.'
    },
    {
      question: 'Ile mam czasu na złożenie wniosku o dotację/realizację wszystkich zadań?',
      answer: `
W przypadku wniosku o dotację składanego bezpośrednio do WFOŚiGW – do 6 miesięcy od poniesienia pierwszego kosztu kwalifikowanego, na zakończenie prac Inwestor ma 30 miesięcy.

W przypadku wniosku składanego przez bank (dotacja na częściową spłatę kapitału kredytu bankowego) – nie można dofinansować przedsięwzięć zaczętych przed złożeniem wniosku kredytowego, natomiast na zakończenie prac Inwestor ma 18 miesięcy.      
      `
    },
    {
      question: 'Czy dom w trakcie budowy kwalifikuje się do dofinansowania?',
      answer: 'Nie kwalifikuje się.'
    },
    {
      question: 'Czy dotacja łączy się z ulgą termomodernizacyjną?',
      answer:
        'Tak, dotacja łączy się z ulgą. Poniesione koszty można odliczyć od podstawy podatku pomniejszając ich wysokość o otrzymaną dotację.'
    },
    {
      question: 'Czy rozbudowa instalacji fotowoltaicznej kwalifikuje się do dotacji?',
      answer:
        'Rozbudowa istniejącej instalacji nie kwalifikuje się do Programu, nieważne czy Inwestor już korzystał z dotacji, czy nie. OSD nie wyda Inwestorowi zaświadczenia potwierdzającego wymianę licznika na dwukierunkowy (wymagane).'
    },
    {
      question: 'Czy mogę starać się o dofinansowanie, jeżeli rozliczam się za granicą? ',
      answer:
        'Tak, jeżeli dochód za poprzedni rok rozliczeniowy w przeliczeniu na złotówki nie przekroczył kwoty 100 000zł. (Po kursie walut NBP).'
    },
    {
      question: 'Czy mogę ubiegać się dotację wyłącznie na instalację fotowoltaiczną?',
      answer:
        'Nie, aby wnioskować o dotację na fotowoltaikę należy wymienić również nieefektywne źródło ciepła na paliwo stałe.'
    },
    {
      question: 'Czy na samą pompę ciepła można wnioskować?',
      answer: 'Tak, pod warunkiem spełnienia warunków programu.'
    },
    {
      question:
        'Czy mogę starać się o dotację Czyste Powietrze, jeżeli skorzystam z gminnego programu dofinansowań na wymianę źródła ciepła?',
      answer: `
Jeżeli wnioskodawca otrzymał dofinansowanie z gminy, tzn. podpisał umowę na to dofinansowanie, w terminie do 30 kwietnia 2020 r., to może otrzymać dotację z Programu Czyste Powietrze tylko na zakres przedsięwzięcia, na który nie otrzymał dofinansowania w ramach programu z gminy.

Natomiast w przypadku, gdy Wnioskodawca otrzyma dofinansowanie z gminy (podpisał umowę) po 30.04.2020 r. to może uzyskać dodatkową dotację z Programu Czyste Powietrze na ten sam zakres przedsięwzięcia co we wniosku do programu gminnego. Łączna kwota dofinansowania w takim przypadku nie może jednak przekroczyć 100% kosztów kwalifikowanych przedsięwzięcia.      
      `
    }
  ];
</script>

<svelte:head>
  <title>Czyste Powietrze | Specsolar.pl</title>
  <meta name="description" content="Program dofinansowania Czyste Powietrze" />
</svelte:head>

<SubsidyHeader title="Czyste Powietrze" />

<div>
  <Faq title="Poznaj szczegóły dotacji " data={faq} />
</div>

<Cta />
