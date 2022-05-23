<template>
  <main>
    <img src="../assets/images/contact-bandeau.jpg" alt="bandeau contact" />

    <p class="mx-24 mt-8 mb-11 font-bold">
      Pour toutes questions, ou si vous rencontrez des problèmes, merci de bien remplir ce formulaire :
    </p>

    <form class="mx-56 mb-14 w-full max-w-lg">
      <div class="-mx-3 mb-6 flex flex-wrap">
        <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-first-name"> Prénom </label>
          <input
            class="
              mb-3
              block
              w-full
              appearance-none
              rounded
              border border-red-500
              bg-gray-200
              py-3
              px-4
              leading-tight
              text-gray-700
              focus:bg-white focus:outline-none
            "
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <p class="text-xs italic text-red-500">Veillez completer ce champ</p>
        </div>
        <div class="w-full px-3 md:w-1/2">
          <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-last-name"> Nom </label>
          <input
            class="
              block
              w-full
              appearance-none
              rounded
              border border-gray-200
              bg-gray-200
              py-3
              px-4
              leading-tight
              text-gray-700
              focus:border-gray-500 focus:bg-white focus:outline-none
            "
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div class="-mx-3 mb-6 flex flex-wrap">
        <div class="w-full px-3">
          <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-password"> E-mail </label>
          <input
            class="
              mb-3
              block
              w-full
              appearance-none
              rounded
              border border-gray-200
              bg-gray-200
              py-3
              px-4
              leading-tight
              text-gray-700
              focus:border-gray-500 focus:bg-white focus:outline-none
            "
            id="email"
            type="email"
          />
        </div>
      </div>

      <div class="-mx-3 mb-6 flex flex-wrap">
        <div class="w-full px-3">
          <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-password"> Objet </label>
          <input
            class="
              mb-3
              block
              w-full
              appearance-none
              rounded
              border border-gray-200
              bg-gray-200
              py-3
              px-4
              leading-tight
              text-gray-700
              focus:border-gray-500 focus:bg-white focus:outline-none
            "
            id="email"
            type="email"
          />
        </div>
      </div>

      <div class="mb-12">
        <div class="form-check">
          <input
            class="
              form-check-input
              float-left
              mx-7
              mt-1
              mr-2
              h-4
              w-4
              cursor-pointer
              appearance-none
              rounded-sm
              border border-gray-300
              bg-white bg-contain bg-center bg-no-repeat
              align-top
              transition
              duration-200
              checked:border-blue-600 checked:bg-blue-600
              focus:outline-none
            "
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
            Je rencontre des problèmes de chargement sur le site
          </label>
        </div>

        <div class="form-check">
          <input
            class="
              form-check-input
              float-left
              mx-7
              mt-1
              mr-2
              h-4
              w-4
              cursor-pointer
              appearance-none
              rounded-sm
              border border-gray-300
              bg-white bg-contain bg-center bg-no-repeat
              align-top
              transition
              duration-200
              checked:border-blue-600 checked:bg-blue-600
              focus:outline-none
            "
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked"> Je n’arrive pas à joindre les liens </label>
        </div>

        <div class="form-check">
          <input
            class="
              form-check-input
              float-left
              mx-7
              mt-1
              mr-2
              h-4
              w-4
              cursor-pointer
              appearance-none
              rounded-sm
              border border-gray-300
              bg-white bg-contain bg-center bg-no-repeat
              align-top
              transition
              duration-200
              checked:border-blue-600 checked:bg-blue-600
              focus:outline-none
            "
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked"> Je rencontre des bugs fréquents </label>
        </div>

        <div class="form-check">
          <input
            class="
              form-check-input
              float-left
              mx-7
              mt-1
              mr-2
              h-4
              w-4
              cursor-pointer
              appearance-none
              rounded-sm
              border border-gray-300
              bg-white bg-contain bg-center bg-no-repeat
              align-top
              transition
              duration-200
              checked:border-blue-600 checked:bg-blue-600
              focus:outline-none
            "
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked"> Utilisation du site </label>
        </div>

        <div class="form-check">
          <input
            class="
              form-check-input
              float-left
              mx-7
              mt-1
              mr-2
              h-4
              w-4
              cursor-pointer
              appearance-none
              rounded-sm
              border border-gray-300
              bg-white bg-contain bg-center bg-no-repeat
              align-top
              transition
              duration-200
              checked:border-blue-600 checked:bg-blue-600
              focus:outline-none
            "
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked"> Confidentialité </label>
        </div>

        <div class="form-check">
          <input
            class="
              form-check-input
              float-left
              mx-7
              mt-1
              mr-2
              h-4
              w-4
              cursor-pointer
              appearance-none
              rounded-sm
              border border-gray-300
              bg-white bg-contain bg-center bg-no-repeat
              align-top
              transition
              duration-200
              checked:border-blue-600 checked:bg-blue-600
              focus:outline-none
            "
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked"> Dépannage </label>
        </div>

        <div class="form-check">
          <input
            class="
              form-check-input
              float-left
              mx-7
              mt-1
              mr-2
              h-4
              w-4
              cursor-pointer
              appearance-none
              rounded-sm
              border border-gray-300
              bg-white bg-contain bg-center bg-no-repeat
              align-top
              transition
              duration-200
              checked:border-blue-600 checked:bg-blue-600
              focus:outline-none
            "
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked"> Autre </label>
        </div>
      </div>

      <div class="-mx-3 mb-6 flex flex-wrap">
        <div class="w-full px-3">
          <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-password"> Votre message </label>
          <textarea
            class="
              no-resize
              mb-3
              block
              h-48
              w-full
              resize-none
              appearance-none
              rounded
              border border-gray-200
              bg-gray-200
              py-3
              px-4
              leading-tight
              text-gray-700
              focus:border-gray-500 focus:bg-white focus:outline-none
            "
            id="message"
          ></textarea>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button
            class="
              bg-orange-clair
              focus:shadow-outline
              rounded
              py-2
              px-4
              font-bold
              text-white
              shadow
              hover:bg-orange-fonce
              focus:outline-none
            "
            type="button"
          >
            Envoyez
          </button>
        </div>
        <div class="md:w-2/3"></div>
      </div>
    </form>
  </main>
</template>

<script>
export default {};
</script>