<script lang="ts">
  import type { LeadType } from '$lib/models/all';
  import Lead from '$lib/oferta/Lead.svelte';

  const lead: LeadType = {
    imageUrl: '/images/oferta/klimatyzacja.png',
    title: 'Klimatyzatory',
    subtitle: 'Zadbaj o odpowiedni klimat w domu Idealna temperatura niemal przez cały rok.',
    desc: `Proponujemy montaż klimatyzatorów z funkcją grzania, które są idealnym uzupełnieniem instalacji
fotowoltaicznej. W lecie poprawiają komfort w domu, poprzez obniżenie temperatury powietrza, a w
okresach przejściowych pozwalają na szybkie dogrzanie pomieszczeń. Co więcej, korzystanie z
klimatyzacji podłączonej do paneli fotowoltaicznych, nie generuje dodatkowych kosztów
energetycznych. Klimatyzacja z możliwością grzania zapewnia utrzymanie właściwej temperatury w domu, prawie przez cały rok.`,
    points: [
      {
        name: 'Szybki montaż',
        desc: 'Przy montażu klimatyzacji instalacja PV, nie musi być przewymiarowana.'
      },
      {
        name: 'Wykorzystaj darmowy prąd w 100%',
        desc: 'Spożytkuj nadwyżki prądu odsyłane do sieci OSD, na pracę klimatyzacji.'
      },
      {
        name: 'Oszczędzaj na ogrzewaniu',
        desc: 'Ogranicz korzystanie z ogrzewania paliwem stałym lub ciekłym.'
      },
      {
        name: 'Zyskaj podwójnie',
        desc: 'Zwiększasz oszczędności nie tylko za energię, ale również za ogrzewanie domu.'
      },
      {
        name: 'Korzystaj z PV w pełni',
        desc: 'Wykorzystanie darmowej energii z PV na klimatyzację umożliwia szybszy zwrot inwestycji.'
      }
    ]
  };
</script>

<svelte:head>
  <title>Klimatyzatory | Specsolar.pl</title>
  <meta name="description" content="Opis musi być" />
</svelte:head>

<Lead data={lead} />
