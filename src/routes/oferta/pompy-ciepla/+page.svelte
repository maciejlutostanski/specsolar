<script lang="ts">
  import type { LeadType } from '$lib/models/all';
  import Lead from '$lib/oferta/Lead.svelte';

  const lead: LeadType = {
    imageUrl: '/images/oferta/pompa.png',
    title: 'Pompy ciepła',
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
  <title>Pompy ciepła | Specsolar.pl</title>
  <meta name="description" content="Opis musi być" />
</svelte:head>

<Lead data={lead} />
