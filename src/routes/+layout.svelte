<script lang="ts">
  import Footer from '$lib/Footer.svelte';
  import Header from '../lib/Header.svelte';
  import './../app.postcss';
</script>

<div class="mx-auto flex flex-col min-h-screen">
  <Header />

  <main class="flex-grow">
    <slot />
  </main>

  <Footer />
</div>
