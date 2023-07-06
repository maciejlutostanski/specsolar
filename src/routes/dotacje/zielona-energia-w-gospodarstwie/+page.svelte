<script lang="ts">
  import Cta from '$lib/Cta.svelte';
  import Faq from '$lib/Faq.svelte';
  import SubsidyHeader from '$lib/SubsidyHeader.svelte';
  import type { FaqItemType } from '$lib/models/all';

  const faq: FaqItemType[] = [
    {
      question: 'Do kiedy można złożyć wniosek?',
      answer: `Wniosek należy złożyć w terminie od 31 stycznia do 1 marca tego roku.`
    },
    {
      question: 'Gdzie należy złożyć wniosek?',
      answer: `Bezpośrednio w Oddziałach Regionalnych lub Biurach Powiatowych ARiMR właściwych ze względu na miejsce realizacji inwestycji. Ewentualnie przesyłką rejestrowaną nadaną w polskiej placówce pocztowej do Biura Powiatowego ARiMR (liczy się data nadania przesyłki).`
    },
    {
      question: 'Czy wniosek można złożyć online?',
      answer: `Tak, przez platformę ePUAP.`
    },
    {
      question: 'Czy wniosek może złożyć pełnomocnik?',
      answer: `Pełnomocnikiem może zostać osoba posiadająca notarialne pełnomocnictwo.`
    },
    {
      question: 'Od czego zależy wysokość kwoty dotacji?',
      answer: `Złożony wniosek, oceni komisja według skali punktowej. To od niej uzależniona będzie wysokość dotacji, którą otrzymasz.`
    },
    {
      question: 'Jakie kryteria komisja będzię brała pod uwagę?',
      answer: `
Certyfikat uczestnictwa w unijnym systemie jakości – rolnictwo ekologiczne.

Realizację operacji na gruntach znajdujących się na następujących formach przyrody tj. parki narodowe, rezerwaty przyrody, parki krajobrazowe, obszary chronionego krajobrazu, obszary Natura 2000 wraz z ich otulinami.

Brak występujących urządzeń do wytwarzania energii elektrycznej dofinansowanych ze środków PROW 2014 – 2020.

Ukończone szkolenie programu, w którym uwzględniono zagadnienia dotyczące efektywności energetycznej gospodarstwa rolnego lub zobowiązanie się do jego ukończenia nie później niż w terminie 12 miesięcy od dnia otrzymania płatności końcowej.

Prowadzenie produkcji zwierzęca w ilości równej co najmniej 5 DJP.

Sprawność urządzeń do wytwarzania energii elektrycznej z promieniowania słonecznego.
      `
    },
    {
      question: 'Jaki charakter musi mieć prowadzona działalność?',
      answer: `Działalność musi mieć charakter produkcji zwierzęcej lub roślinnej, z wyłączeniem chowu i hodowli ryb oraz nieekologicznego chowu drobiu. Jeżeli wnioskodawca prowadzi działalność w celu naukowo-badawczym, to nie uzyska dotacji z programu.`
    }
  ];

  const what = `
- Instalacja fotowoltaiczna
- Magazyn energii
- Pompa ciepła
- System zarządzania przepływem energii
  `;
</script>

<svelte:head>
  <title>Zielona energia w gospodarstwie | Specsolar.pl</title>
  <meta name="description" content="Zielona energia w gospodarstwie" />
</svelte:head>

<SubsidyHeader
  title="Zielona energia w gospodarstwie"
  forWho="Dla osób fizycznych i prawnych, spółek osobowych w rozumieniu Kodeksu spółek handlowych, wspólników spółek cywilnych, oddziałów przedsiębiorstwa zagranicznego."
  {what}
  amount="Rolnik może otrzymać do 50% poniesionych kosztów kwalifikowalnych, zaś młody rolnik 60%."
/>

<div>
  <Faq title="Poznaj szczegóły dotacji" data={faq} />
</div>

<Cta />
