<script lang="ts">
  import Faq from '$lib/Faq.svelte';
  import type { FaqItemType } from '$lib/models/all';

  const faq: FaqItemType[] = [
    {
      question: 'Dla kogo przeznaczone jest dofinansowanie?',
      answer:
        'Dla osób fizycznych, osób prowadzących działalność gospodarczą, przedsiębiorców, osób prawnych i wspólnot mieszkaniowych.'
    },
    {
      question: 'Jakie warunki trzeba spełnić?',
      answer: `
- Nieruchomość musi być zlokalizowana na terenie m.st. Warszawy,
- Nieruchomość musi być ogrzewana kotłami lub paleniskami na paliwo stałe albo olej opałowy (przed podpisaniem umowy o dofinansowanie będzie kontrola)
- Należy zlikwidować stare nieefektywne źródło ciepła i zastąpić je nowym.
      `
    },
    {
      question: 'Jaką dotację można uzyskać?',
      answer: `
Dotacja nie może przekroczyć 90% kosztów kwalifikowanych.

- Powietrzna pompa ciepła – do 30 000 zł, ale nie więcej niż 3 000 zł za każdy kW mocy grzewczej urządzenia.
- Fotowoltaika – do 15 000zł, ale nie więcej niż 5 000zł za każdy KW mocy grzewczej urządzenia.
      `
    },
    {
      question: 'Czy "WOJTMAR" może złożyć w moim imieniu wniosek o dotację?',
      answer:
        'Tak, możemy złożyć wniosek o dotację w imieniu Inwestora, pod warunkiem udzielenia nam odpowiedniego pełnomocnictwa.'
    },
    {
      question: 'Jakie dokumenty wymagane są do złożenia wniosku?',
      answer: `
- Pełnomocnictwo
- Wniosek o udzielenie dotacji
- Opcjonalnie: Zgoda właściciela / współwłaściciela nieruchomości na realizację inwestycji      
      `
    },
    {
      question: 'Do kiedy można składać wnioski?',
      answer: 'Wnioski można składać przez cały rok.'
    },
    {
      question: 'Czy dotacja łączy się z ulgą termomodernizacyjną?',
      answer: `
Tak dotacja łączy się z ulgą termomodernizacyjną oraz można połączyć ją z dotacją Czyste Powietrze.

Poniesione koszty można odliczyć od podstawy podatku pomniejszając ich wysokość o otrzymaną dotację.`
    },
    {
      question: 'Czy można dwa razy skorzystać z dotacji?',
      answer:
        'Dotacja udzielana jest jednorazowo pod dany adres. Jeżeli pod tym samym adresem zostały wykonane dwie instalacje (firmowa i prywatna) – można skorzystać z dopłaty tylko do jednej inwestycji.'
    },
    {
      question:
        'Z jakim źródłem ciepła muszę połączyć fotowoltaikę, żeby móc ubiegać się o dofinansowanie?',
      answer: 'Fotowoltaikę można połączyć tylko z pompą ciepła lub ogrzewaniem elektrycznym.'
    }
  ];
</script>

<svelte:head>
  <title>Mój Prąd | Specsolar.pl</title>
  <meta name="description" content="Dotacja Warszawska" />
</svelte:head>

<div>
  <Faq title="Poznaj szczegóły dotacji" data={faq} />
</div>
