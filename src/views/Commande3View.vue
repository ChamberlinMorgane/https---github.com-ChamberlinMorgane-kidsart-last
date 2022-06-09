<template>
  <main>
    <div class="min-w-screen bg-fond-site flex min-h-screen items-center justify-center px-5 pb-10">
      <div class="mx-auto w-full rounded-lg bg-white p-5 text-black shadow-lg" style="max-width: 600px">
        <div class="w-full pt-1 pb-5"></div>
        <div class="mb-10">
          <h1 class="md:text-1xl font-bolduppercase text-center sm:text-3xl lg:text-4xl">Paiement sécurisée information</h1>
        </div>
        <div class="-mx-2 mb-3 flex">
          <div class="px-2">
            <label for="type1" class="flex cursor-pointer items-center">
              <input type="radio" class="form-radio h-5 w-5 text-orange-500" name="type" id="type1" checked />
              <img src="images/moyen-de-paiement-3.jpg" alt="mode de paiement" class="mx-16 flex w-44" />
            </label>
          </div>
          <div class="px-2">
            <label for="type2" class="flex cursor-pointer items-center">
              <input type="radio" class="form-radio h-5 w-5 text-orange-500" name="type" id="type2" />
              <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" class="ml-3 h-8" />
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label class="mb-2 ml-1 text-sm font-bold">Nom de la carte</label>
          <div>
            <input
              class="mb-1 w-full rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-orange-500 focus:outline-none"
              placeholder="John Smith"
              type="text"
            />
          </div>
        </div>
        <div class="mb-3">
          <label class="mb-2 ml-1 text-sm font-bold">Numéro carte</label>
          <div>
            <input
              class="mb-1 w-full rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-orange-500 focus:outline-none"
              placeholder="0000 0000 0000 0000"
              type="text"
            />
          </div>
        </div>
        <div class="-mx-2 mb-3 flex items-end">
          <div class="w-1/2 px-2">
            <label class="mb-2 ml-1 text-sm font-bold">Date d'expiration</label>
            <div>
              <select
                class="
                  form-select
                  mb-1
                  w-full
                  cursor-pointer
                  rounded-md
                  border-2 border-gray-200
                  px-3
                  py-2
                  transition-colors
                  focus:border-orange-500 focus:outline-none
                "
              >
                <option value="01">01 - Janvier</option>
                <option value="02">02 - Février</option>
                <option value="03">03 - Mars</option>
                <option value="04">04 - Avril</option>
                <option value="05">05 - May</option>
                <option value="06">06 - Juin</option>
                <option value="07">07 - Juillet</option>
                <option value="08">08 - Août</option>
                <option value="09">09 - Septembre</option>
                <option value="10">10 - Octobre</option>
                <option value="11">11 - Novembre</option>
                <option value="12">12 - Decembre</option>
              </select>
            </div>
          </div>
          <div class="w-1/2 px-2">
            <select
              class="
                form-select
                mb-1
                w-full
                cursor-pointer
                rounded-md
                border-2 border-gray-200
                px-3
                py-2
                transition-colors
                focus:border-orange-500 focus:outline-none
              "
            >
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </div>
        </div>
        <div class="mb-10">
          <label class="mb-2 ml-1 text-sm font-bold">Code de sécurité</label>
          <div>
            <input
              class="mb-1 w-32 rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-orange-500 focus:outline-none"
              placeholder="000"
              type="text"
            />
          </div>
        </div>
        <div>
          <button
            class="
              mx-auto
              block
              w-full
              max-w-xs
              rounded-lg
              bg-orange-500
              px-3
              py-3
              font-semibold
              text-black
              hover:bg-orange-600
              focus:bg-orange-600
            "
          >
            <i class="mdi mdi-lock-outline mr-1"></i> PAYER MAINTENANT
          </button>
        </div>
      </div>
    </div>
  </main>
</template>