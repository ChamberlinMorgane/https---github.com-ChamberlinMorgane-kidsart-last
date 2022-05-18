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
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/apropos', name: 'Apropos', component: AproposView },
    { path: '/coloriage', name: 'Coloriage', component: ColoriageView },
    { path: '/commande', name: 'Commande', component: CommandeView },
    { path: '/connexion', name: 'Connexion', component: ConnexionView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/inscriptions', name: 'Inscriptions', component: InscriptionsView },
    { path: '/mentionslegales', name: 'Mentionslegales', component: MentionslegalesView },
    { path: '/moncompte', name: 'Moncompte', component: MoncompteView },
    { path: '/nosartistes', name: 'Nosartistes', component: NosartistesView },
    // ici les autre routes
  ]
})

export default router
