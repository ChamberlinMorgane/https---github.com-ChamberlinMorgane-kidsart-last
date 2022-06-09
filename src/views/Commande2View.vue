<template>
  <main>
    <img src="images/hero-commande.jpg" class="mt-44" alt="bandeau commande" />

    <h2 class="mx-24 mt-10 mb-10 text-lg">Panier > Coordonnées > Payer</h2>
    <p class="md:text-1xl m-20 text-center font-bold sm:text-3xl lg:text-4xl">Coordonnées de livraison</p>

    <div class="mt-10 mb-28 sm:mt-0">
      <div class="md:grid md:grid-cols-4 md:gap-6">
        <div class="md:col-span-1"></div>
        <div class="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div class="overflow-hidden shadow sm:rounded-md">
              <div class="px-4 py-5 sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="prenom" class="block text-sm font-medium">Prénom</label>
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      autocomplete="donner votre prenom"
                      class="mt-1 h-10 w-full rounded-md bg-amber-200 shadow-sm sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="nom" class="block text-sm font-medium text-black">Nom</label>
                    <input
                      type="text"
                      name="nom"
                      id="nom"
                      autocomplete="nom de famille"
                      class="mt-1 h-10 w-full rounded-md bg-amber-200 shadow-sm sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label for="address" class="block text-sm font-medium text-black">Adresse de livraison</label>
                    <input
                      type="text"
                      name="addresse"
                      id="addresse"
                      autocomplete="adresse"
                      class="mt-1 h-10 w-full rounded-md bg-amber-200 shadow-sm sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="country" class="block text-sm font-medium text-black">Ville</label>
                    <select
                      id="country"
                      name="country"
                      autocomplete="country"
                      class="mt-1 block h-10 w-full rounded-md border bg-amber-200 py-2 px-3"
                    >
                      <option>France</option>
                      <option>Canada</option>
                      <option>USA</option>
                    </select>
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label for="phone" class="block text-sm font-medium text-black">Téléphone</label>
                    <input type="text" name="phone" id="phone" class="mt-1 h-10 w-full rounded-md bg-amber-200 shadow-sm sm:text-sm" />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="postal_code" class="block text-sm font-medium text-gray-700">Code postal</label>
                    <input
                      type="text"
                      name="postal_code"
                      id="postal_code"
                      autocomplete="postal-code"
                      class="mt-1 h-10 w-full rounded-md bg-amber-200 shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <p class="mx-16 mb-3">Moyens de paiement</p>
              <div class="mb-9 flex">
                <img src="images/paiement.jpg" alt="mode de paiement" class="mx-16 flex w-72" />
                <RouterLink to="/commande3"
                  ><button
                    type="submit"
                    class="mx-4 rounded-lg border-2 border-black bg-orange-clair px-20 py-1 text-sm font-medium text-black"
                  >
                    Payer
                  </button>
                </RouterLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>