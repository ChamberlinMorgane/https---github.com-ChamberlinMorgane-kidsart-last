<template>
  <main class="min-h-screen">
    <img src="images/hero-commande.jpg" class="mt-44" alt="bandeau commande" />

    <h2 class="mx-24 mt-10 mb-10 text-lg">Panier > Coordonnées > Payer</h2>

    <div class="mx-24">
      <div class="grid h-10 w-max grid-cols-4 gap-14 bg-amber-400 p-2 text-center">
        <p>Article(s)</p>
        <p>Prix</p>
        <p>Quantité(s)</p>
        <p>Total</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-x-72">
      <div class="mx-24 my-5 flex h-64 w-max bg-gray-300 pr-10">
        <img class="ml-5 h-auto w-32" src="images/attrape-reve-commande.svg" alt="dessin" />
        <p class="mt-24 ml-8">55€</p>
        <img class="ml-11 mb-8 w-28" src="images/Quantités.svg" alt="hero commmande" />
        <p class="mt-24 ml-14">55,00€</p>
      </div>
      <div>
        <div class="ml-auto mr-48 h-auto w-80 bg-black pt-5 text-white">
          <p class="mb-5 text-center">Résumé de la commande</p>
          <div class="flex justify-center gap-32 pb-16">
            <p>TOTAL :</p>
            <p>58,00€</p>
          </div>
          <a href="commande2"><button class="ml-24 mb-6 h-11 w-32 rounded-xl bg-orange-clair font-bold text-black">PAYER</button></a>
        </div>

        <p class="mt-7 mb-6 text-center font-bold uppercase">Nous acceptons</p>
        <div class="flex justify-center gap-6">
          <img class="h-7 w-11" src="images/visa.jpg" alt="carte bancaire" />
          <img class="h-7 w-11" src="images/mastercard-logo.jpg" alt="carte bancaire" />
        </div>
        <div class="mt-8 flex justify-center gap-6">
          <img class="h-7 w-11" src="images/paypal-logo.jpg" alt="paypal" />
          <img class="mb-8 h-7 w-11" src="images/cb.jpg" alt="carte bancaire" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>