<script lang="ts">
  import Footer from '$lib/Footer.svelte';
  import Header from '../lib/Header.svelte';
  import './../app.postcss';
</script>

<div class="container mx-auto flex flex-col min-h-screen">
  <Header />
  <!-- <div class="h-20 relative" /> -->

  <main class="flex-grow">
    <slot />
  </main>

  <Footer />
</div>
