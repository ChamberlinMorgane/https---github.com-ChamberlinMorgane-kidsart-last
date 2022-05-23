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


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/accueil', name: 'AccueilView', component: AccueilView },
    { path: '/apropos', name: 'AproposView', component: AproposView },
    { path: '/coloriage', name: 'ColoriageView', component: ColoriageView },
    { path: '/commande', name: 'CommandeView', component: CommandeView },
    { path: '/connexion', name: 'ConnexionView', component: ConnexionView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/inscriptions', name: 'InscriptionsView', component: InscriptionsView },
    { path: '/mentionslegales', name: 'MentionslegalesView', component: MentionslegalesView },
    { path: '/moncompte', name: 'MoncompteView', component: MoncompteView },
    { path: '/nosartistes', name: 'NosartistesView', component: NosartistesView },

  ]
})

export default router