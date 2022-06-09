<template>
  <main class="bg-white text-black">
    <h1 class="md:text-1xl mx-32 my-7 mb-20 pt-20 text-center font-bold sm:text-3xl lg:text-4xl">Guide de styles</h1>

    <h2 class="mx-32 my-7 text-2xl font-bold">Couleurs</h2>
    <h3 class="text-1xl mx-32 my-7">Couleurs principales</h3>
    <div class="mx-32 flex">
      <div class="rounded-10xl bg-fond-site mx-2 mb-20 h-24 w-52"></div>
      <div class="rounded-10xl mx-2 h-24 w-52 bg-black"></div>
    </div>

    <h3 class="text-1xl mx-32 my-7">Couleurs secondaires</h3>
    <div class="mx-32 flex">
      <div class="h-24 w-52 rounded-l-lg bg-orange-clair"></div>
      <div class="bg-prenom-promo h-24 w-52"></div>
      <div class="mb-20 h-24 w-52 bg-jaune"></div>
      <div class="mb-20 h-24 w-52 bg-bouton-promo-final"></div>
    </div>

    <h3 class="text-1xl mx-32 my-7">Nuances de noir</h3>

    <div class="mx-32 flex">
      <div class="h-24 w-52 rounded-l-lg bg-black"></div>
      <div class="h-24 w-52 bg-fond2footer"></div>
      <div class="h-24 w-52 bg-fond1footer"></div>
      <div class="h-24 w-52 bg-white"></div>
    </div>

    <h2 class="mx-32 my-7 text-2xl font-bold">Polices</h2>

    <h4 class="mx-32 font-acme text-2xl">Heading 1</h4>
    <h4 class="font-bebas-neue mx-32 text-2xl">Heading 2</h4>
    <h4 class="font-Inter mx-32 text-xl">Heading 3</h4>
    <h4 class="text-1xl font-Mulish mx-32">Heading 4</h4>

    <h2 class="mx-32 my-7 text-2xl font-bold">Icones</h2>

    <div class="mx-32 mb-20 space-x-4">
      <h4 class="mb-6">Réseaux sociaux</h4>
      <div class="mb-9 flex space-x-4"></div>

      <h4 class="mb-6">Menu</h4>
      <div class="mb-9 flex space-x-4">
        <MenuView class="bg-white" />
        <Xview class="bg-white" />
      </div>
    </div>

    <h2 class="mx-32 mb-9 text-2xl font-bold">Composants</h2>
    <h4 class="mx-32 mb-9">Boutons</h4>
    <div class="mx-32 mb-10 space-x-4">
      <button
        class="
          bg-illustrationrose
          focus:shadow-outline
          rounded-9xl
          border-2 border-white
          py-2
          px-20
          font-bold
          text-white
          shadow
          focus:outline-none
        "
        type="button"
      >
        Plus de détails sur les artistes
      </button>

      <button
        class="
          bg-illustrationrose
          focus:shadow-outline
          rounded-9xl
          border-2 border-white
          py-2
          px-20
          font-bold
          text-white
          shadow
          focus:outline-none
        "
        type="button"
      >
        Envoyez
      </button>

      <button
        class="
          bg-boutonvert
          focus:shadow-outline
          rounded-9xl
          border-2 border-white
          py-2
          px-20
          font-bold
          text-white
          shadow
          focus:outline-none
        "
        type="button"
      >
        Rejoinez-nous !
      </button>
    </div>

    <h2 class="mx-32 mt-20 text-2xl font-bold">Checkbox</h2>

    <div class="mx-32 mt-10 pb-12">
      <div class="form-check">
        <input
          class="
            form-check-input
            checked:bg-illustrationrose
            float-left
            mx-7
            mt-1
            mr-2
            h-4
            w-4
            cursor-pointer
            appearance-none
            rounded-full
            border border-black
            bg-white bg-contain bg-center bg-no-repeat
            align-top
            transition
            duration-200
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label inline-block text-black" for="flexCheckDefault">
          Je rencontre des problèmes de chargement sur le site
        </label>
      </div>

      <div class="form-check">
        <input
          class="
            form-check-input
            checked:bg-illustrationrose
            float-left
            mx-7
            mt-1
            mr-2
            h-4
            w-4
            cursor-pointer
            appearance-none
            rounded-full
            border border-black
            bg-white bg-contain bg-center bg-no-repeat
            align-top
            transition
            duration-200
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label inline-block text-black" for="flexCheckChecked"> Je n’arrive pas à joindre les liens </label>
      </div>

      <div class="form-check">
        <input
          class="
            form-check-input
            checked:bg-illustrationrose
            float-left
            mx-7
            mt-1
            mr-2
            h-4
            w-4
            cursor-pointer
            appearance-none
            rounded-full
            border border-black
            bg-white bg-contain bg-center bg-no-repeat
            align-top
            transition
            duration-200
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label inline-block text-black" for="flexCheckChecked"> Je rencontre des bugs fréquents </label>
      </div>

      <div class="form-check">
        <input
          class="
            form-check-input
            checked:bg-illustrationrose
            float-left
            mx-7
            mt-1
            mr-2
            h-4
            w-4
            cursor-pointer
            appearance-none
            rounded-full
            border border-black
            bg-white bg-contain bg-center bg-no-repeat
            align-top
            transition
            duration-200
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label inline-block text-black" for="flexCheckChecked"> Utilisation du site </label>
      </div>

      <div class="form-check">
        <input
          class="
            form-check-input
            checked:bg-illustrationrose
            float-left
            mx-7
            mt-1
            mr-2
            h-4
            w-4
            cursor-pointer
            appearance-none
            rounded-full
            border border-black
            bg-white bg-contain bg-center bg-no-repeat
            align-top
            transition
            duration-200
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label inline-block text-black" for="flexCheckChecked"> Confidentialité </label>
      </div>

      <div class="form-check">
        <input
          class="
            form-check-input
            checked:bg-illustrationrose
            float-left
            mx-7
            mt-1
            mr-2
            h-4
            w-4
            cursor-pointer
            appearance-none
            rounded-full
            border border-black
            bg-white bg-contain bg-center bg-no-repeat
            align-top
            transition
            duration-200
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label inline-block text-black" for="flexCheckChecked"> Dépannage </label>
      </div>

      <div class="form-check">
        <input
          class="
            form-check-input
            checked:bg-illustrationrose
            float-left
            mx-7
            mt-1
            mr-2
            h-4
            w-4
            cursor-pointer
            appearance-none
            rounded-full
            border border-black
            bg-white bg-contain bg-center bg-no-repeat
            align-top
            transition
            duration-200
            focus:outline-none
          "
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label inline-block text-black" for="flexCheckChecked"> Autre </label>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  components: {},
};
</script>