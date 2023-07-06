<script lang="ts">
  import Faq from '$lib/Faq.svelte';
  import type { FaqItemType } from '$lib/models/all';

  const faq: FaqItemType[] = [
    {
      question: 'Czy istnieje możliwość zainstalowania hybrydowej pompy ciepła?',
      answer: `Tak, jest to możliwe, jeżeli w zestawie hybrydowym spełnione są techniczne wymagania dotyczące pompy ciepła, które zostały uwzględnione w programie, takie jak klasa efektywności energetycznej lub współpraca z wodnym ogrzewaniem niskotemperaturowym, a drugi element zestawu nie jest źródłem ciepła zasilanym paliwem stałym.`
    },
    {
      question:
        'Czy w ramach programu możliwe jest finansowanie zakupu pomp C.W.U. (wyłącznie do ogrzania ciepłej wody użytkowej)?',
      answer: `Nie, program obejmuje jedynie pompy ciepła do centralnego ogrzewania (C.O.) oraz pompy do C.O. + C.W.U.`
    },
    {
      question:
        'Czy będę miał możliwość uzyskania dofinansowania, gdy zakupiłem pompę ciepła w 2020 roku lub wcześniej?',
      answer: `Niestety nie, program obejmuje wyłącznie urządzenia zakupione po 01.01.2021 roku`
    },
    {
      question: 'Od czego zależy wysokość kwoty dotacji?',
      answer: `Przede wszystkim, od rodzaju zamontowanej pompy, do 7 tys. w przypadku pompy powietrznej i do 21 tys. w przypadku pompy gruntowej. W obu przypadkach jednak nie więcej niż 30% kosztów kwalifikowanych. W przypadku osób posiadających Kartę Dużej Rodziny wysokość zostanie zwiększony do 45% kosztów kwalifikowanych.`
    },
    {
      question: 'Kto może zostać pełnomocnikiem?',
      answer: `Pełnomocnikiem może zostać każda osoba wskazana na druku pełnomocnictwa.`
    },
    {
      question: 'Czy koszt świadectwa energetycznego jest kosztem kwalifikowanym?',
      answer: `Tak, ale warto mieć na uwadze, że koszt dokumentacji nie powinien być wyższy niż 5% kosztów kwalifikowanych.`
    },
    {
      question: 'Czy jest możliwość połączenia dotacji z ulgą termomodernizacyjną?',
      answer: `Tak, jest możliwe połączenie programu Moje Ciepło z ulgą termomodernizacyjną.`
    },
    {
      question:
        'Nie posiadam pozwolenia na budowę, ponieważ zakupiłem budynek od dewelopera. Czy jest możliwość przepisania pozwolenia na budowę i otrzymanie dofinansowania?',
      answer: `Osoba wypełniająca wniosek musi być wskazana w pozwoleniu na budowę. Niemożliwe jest przepisanie pozwolenia na budowę, w sytuacji, gdy prace budowlane zostały już zakończone.`
    },
    {
      question: 'Co w sytuacji, gdy mam zamiar lub już posiadam w domu kominek?',
      answer: `
Warunkiem w programie jest, aby w budynku mieszkalnym nie znajdowało żadne źródło ciepła na paliwo stałe. Jedyną możliwością uzyskania dofinansowania jest wykonywanie przez kominek funkcji dekoracyjnej lub rekreacyjnej.

Funkcję rekreacyjną kominek pełni, jeżeli: nie posiada płaszcza wodnego, nie posiada systemu rozprowadzenia ciepła (ani grawitacyjnego ani mechanicznego), używany jest sporadycznie, a nie jako źródło ciepła w domu.      
      `
    }
  ];
</script>

<svelte:head>
  <title>Moje Ciepło | Specsolar.pl</title>
  <meta name="description" content="Program Moje Ciepło" />
</svelte:head>

<div>
  <Faq title="Poznaj szczegóły dotacji" data={faq} />
</div>
