<template>
  <main>
    <img src="images/hero_commande.jpg" class="mt-44" alt="bandeau commande" />

    <h2 class="mx-24 mt-10 mb-10 text-lg">Panier > Coordonnées > Payer</h2>

    <div class="mx-24">
      <div class="grid h-10 w-96 grid-cols-4 bg-amber-400 p-2 text-center">
        <p>Article(s)</p>
        <p>Prix</p>
        <p>Quantité(s)</p>
        <p>Total</p>
      </div>
    </div>

    <div class="input-group-prepend mt-2">
      <span class="input-group-text">Prix</span>
    </div>
    <input type="number" class="mb-5 w-16 rounded-5xl py-2 px-3 text-black" v-model="concerts.prix" required />
  </main>
</template>

<script>
export default {};
</script>