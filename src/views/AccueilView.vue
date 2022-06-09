<template>
  <main>
    <h1 class="mt-44 font-acme text-5xl lg:ml-28 lg:text-8xl">Kid’sArt</h1>
    <h1 class="md:text-1xl mt-20 font-roboto sm:text-3xl lg:ml-28 lg:text-3xl">
      Combinez la créativité de vos enfants et<br />
      le talent de nos artistes !
    </h1>

    <img src="/images/img-accueil.jpg" class="ml-auto lg:mr-24" alt="famille" />

    <p class="font-inter sm:text-1xl mt-4 text-center md:text-2xl lg:text-2xl">
      “Un véritable artiste est un artiste qui touche tout le monde.”
    </p>
    <p class="font-inter sm:text-1xl mt-4 text-center md:text-2xl lg:text-2xl">Bernard Werber</p>

    <h2 class="md:text-1xl mx-24 mt-28 font-bold sm:text-3xl lg:text-4xl">Kid’sArt qu’est-ce que c’est ?</h2>
    <div class="mx-20 mb-24 -mt-3 h-4 w-2/6 bg-orange-clair p-px"></div>

    <div class="z-20 float-right -mb-36 mr-52">
      <div class="z-10 mx-4 mr-2 mb-2 rounded-lg bg-orange-clair py-2.5">
        <p class="font-inter sm:text-1xl lg:text-1xl mx-20 mt-8 md:text-2xl">
          Vous souhaitez convertir les dessins de vos enfants en <br />
          guise de souvenirs ou d’élargir vos connaissances en art ? <br />
          Kid’sArt est fait pour vous !
        </p>
        <p class="font-inter sm:text-1xl lg:text-1xl mx-20 mt-2 mb-8 md:text-2xl">
          Nos artistes vous proposent leurs services en interprettant en oeuvre d’art <br />
          les prestations de vos enfants avec talent et imagination
        </p>
      </div>
    </div>

    <img src="/images/index-image.png" class="-z-30 mr-auto w-2/6 pb-52" alt="artiste" />

    <div class="mx-auto max-w-lg">
      <iframe
        frameborder="0"
        class="juxtapose"
        width="491"
        height="705"
        src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=f34ad3e3-dabf-11ec-b5bb-6595d9b17862"
      ></iframe>
    </div>

    <div class="flex flex-col items-center justify-center">
      <p class="my-7 text-center lg:text-xl">
        Cette oeuvre a été réalisé par l’artiste Morgane Monary. L’attrapge rêve signifie l’évolution du rêve, par le biais de
        l’intensité...
      </p>
      <button
        type="button"
        class="mx-4 mr-2 mb-2 rounded-lg border-2 border-black bg-orange-clair px-9 py-2.5 text-sm font-medium text-black"
      >
        En savoir plus
      </button>
    </div>

    <h2 class="md:text-1xl mx-24 mt-28 font-bold sm:text-3xl lg:text-4xl">Mais comment ça marche ?</h2>
    <div class="mx-20 -mt-3 h-4 w-2/6 bg-orange-clair p-px"></div>

    <p class="mx-40 mt-8 font-bold">C’est très simple !</p>

    <div class="mx-28 mt-16">
      <img src="/images/crayon.jpg" alt="crayon de papier" class="w-20" />
      <img src="/images/crayon.jpg" alt="crayon de papier" class="w-20" />
      <img src="/images/crayon.jpg" alt="crayon de papier" class="w-20" />
      <img src="/images/crayon.jpg" alt="crayon de papier" class="w-20" />
    </div>

    <nav class="mx-48 -mt-24 text-xs lg:text-xl">
      <ul>
        <li>Il suffit de choisir un dessin que vous désirez transformer</li>
        <li>De contacter l’artiste que vous désirez sur notre site en jugeant si leurs compétences sont à la hauteur de vos attentes</li>
        <li>Commander par le moyen de paiement que vous préférez parmi Paypal, Mastercad, Visa, carte bancaire</li>
        <li>Valider la commande et s’assurer que votre oeuvre répond à vos critères</li>
      </ul>
    </nav>

    <p class="mx-24 mt-9">Il n’y a plus qu’’offrir à vos proches ou l’accrocher à votre mur</p>

    <div class="mt-20 mb-20 flex flex-col items-center justify-center">
      <a href="inscriptions"
        ><button type="button" class="mb-2 rounded-lg border-2 border-black bg-white px-9 py-5 text-2xl font-medium text-black">
          Je veux m'inscrire !
        </button></a
      >
    </div>
  </main>
</template>

<script>
export default {};
</script>