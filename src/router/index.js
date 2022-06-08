import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import AproposView from '../views/AproposView.vue'
import ColoriageView from '../views/ColoriageView.vue'
import CommandeView from '../views/CommandeView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import ContactView from '../views/ContactView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'
import InscriptionsView from '../views/InscriptionsView.vue'
import MoncompteView from '../views/MoncompteView.vue'
import NosartistesView from '../views/NosartistesView.vue'
import CreateView from '../views/artiste/CreateView.vue'
import UpdateView from '../views/artiste/UpdateView.vue'
import DeleteView from '../views/artiste/DeleteView.vue'
import GuidedestyleView from '../views/GuidedestyleView.vue'
import Page404 from '../views/Page404.vue'
import Commande1View from '../views/Commande1View.vue'
import Commande2View from '../views/Commande2View.vue'
import Commande3View from '../views/Commande3View.vue'
import TchatView from '../views/TchatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/apropos', name: 'AproposView', component: AproposView },
    { path: '/coloriage', name: 'ColoriageView', component: ColoriageView },
    { path: '/commande', name: 'CommandeView', component: CommandeView },
    { path: '/connexion', name: 'ConnexionView', component: ConnexionView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/inscriptions', name: 'InscriptionsView', component: InscriptionsView },
    { path: '/mentionslegales', name: 'MentionslegalesView', component: MentionslegalesView },
    { path: '/moncompte', name: 'MoncompteView', component: MoncompteView },
    { path: '/nosartistes', name: 'NosartistesView', component: NosartistesView },
    { path: '/createview', name: 'CreateView', component: CreateView },
    { path: '/delete/:id', name: 'DeleteView', component: DeleteView },
    { path: '/update/:id', name: 'UpdateView', component: UpdateView },
    { path: '/Guidestyle', name: 'GuidedestyleView', component: GuidedestyleView },
    { path: '/:pathMatch(.*)', name: 'Page404', component: Page404 },
    { path: '/commande1', name: 'Commande1View', component: Commande1View },
    { path: '/commande2', name: 'Commande2View', component: Commande2View },
    { path: '/commande3', name: 'Commande3View', component: Commande3View },
    { path: '/messagerie', name: 'TchatView', component: TchatView },


  ]
})

export default router