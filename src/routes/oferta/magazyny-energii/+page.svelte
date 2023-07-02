<script lang="ts">
  import type { LeadType } from '$lib/models/all';
  import Lead from '$lib/oferta/Lead.svelte';

  const lead: LeadType = {
    imageUrl: '/images/oferta/magazyn.png',
    title: 'Niezależność z magazynem energii w domu i biznesie',
    subtitle:
      'Magazyn energii w Twoim domu to gwarancja bezpieczeństwa i niezależności. Zapomnij o awariach prądu w Twojej okolicy, czy przeciążonej sieci energetycznej. Postaw na magazyn energii i ciesz się darmową energią o każdej porze.',
    desc: `Jest to urządzenie wykorzystywane w celu magazynowania nadwyżki energii elektrycznej
wytworzonej w ciągu dnia przez panele fotowoltaiczne. Połączenie baterii z instalacją PV pozwala
zwiększyć autokonsumpcję, w związku z tym mamy możliwość wykorzystać ją na przykład w nocy,
gdy produkcja z modułów fotowoltaicznych spada, a dalej występuje zapotrzebowanie na ener­gię
elektryczną. Magazyn bez wątpienia zabezpiecza nas od różnych czynników pogodowych, które
wpływają na przerwa­nie dostępności energii. W sytuacji awaryjnej, gdy zabraknie prądu, baterie
magazynujące podtrzymają zasilanie w urządzeniach niezbędnych do funkcjonowania, takich jak
zamrażarka czy lodówka.`,
    points: [
      {
        name: '',
        desc: '100% wykorzystania energii z fotowoltaiki'
      },
      {
        name: '',
        desc: 'Magazyn energii pozwala nam na odebranie 100% energii wyprodukowanej z instalacji PV'
      },
      {
        name: '',
        desc: 'Niezależność od zakładu energetycznego'
      },
      {
        name: '',
        desc: 'Gromadź i korzystaj z energii elektrycznej, nawet podczas awarii sieci energetycznych w Twojej okolicy.'
      },
      {
        name: '',
        desc: 'Koniec problemu przeciążonej sieci'
      },
      {
        name: '',
        desc: 'Problem za wysokiego napięcia w sieci? Z magazynem ten problem nie jest nam straszny.'
      },
      {
        name: '',
        desc: 'Magazyny na długie lata'
      },
      {
        name: '',
        desc: 'Gwarancja producenta na okres 10 lat pozwala na wieloletnie bezawaryjne użytkowanie.'
      }
    ]
  };
</script>

<svelte:head>
  <title>Magazyny energii | Specsolar.pl</title>
  <meta name="description" content="Opis musi być" />
</svelte:head>

<Lead data={lead} />
