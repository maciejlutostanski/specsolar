<script lang="ts">
  import Cta from '$lib/Cta.svelte';
  import OfferCard from '$lib/OfferCard.svelte';
  import type { LeadType } from '$lib/models/all';
  import Lead from '$lib/oferta/Lead.svelte';

  const lead: LeadType = {
    imageUrl: '/images/dotacje/lead.png',
    title: 'Dotacje na Ekoinwestycje',
    subtitle:
      'Planujesz własną termomodernizację domu? Zastanawiasz się skąd pozyskać dotację dla Twojego przedsięwzięcia?',
    desc: `Dobrze trafiłeś! Wieloletnie doświadczenie pozwala nam na profesjonalnąi rzetelną pomoc w pozyskiwaniu dotacji gminnych oraz rządowych. Zadzwoń i dowiedz się, który program jest dla Ciebie!`,
    points: []
  };
</script>

<svelte:head>
  <title>Dotacje | Specsolar.pl</title>
  <meta name="description" content="Opis musi być" />
</svelte:head>

<Lead data={lead} category="Dotacje" />

<div class="bg-white py-12 sm:py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Aktualne dotacje</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">
        Poznaj wszystkie dostępne obecnie programy dofinansowań.
      </p>
    </div>
    <div
      class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <OfferCard
        title="Program “Mój Prąd”"
        imageUrl="/images/dotacje/1.png"
        href="/dotacje/moj-prad"
      />
      <OfferCard
        title="Program “Czyste Powietrze”"
        imageUrl="/images/dotacje/2.png"
        href="/dotacje/czyste-powietrze"
      />
      <OfferCard
        title="Dotacja Warszawska"
        imageUrl="/images/dotacje/3.png"
        href="/dotacje/warszawska"
      />
      <OfferCard
        title="Program “Mój Ciepło”"
        imageUrl="/images/dotacje/4.png"
        href="/dotacje/moje-cieplo"
      />
      <OfferCard
        title="Program “Zielona Energia w Gospodarstwie”"
        imageUrl="/images/dotacje/5.png"
        href="/dotacje/zielona-energia-w-gospodarstwie"
      />
    </div>
  </div>
</div>

<Cta />
