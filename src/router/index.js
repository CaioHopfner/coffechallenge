import { createRouter, createWebHistory } from 'vue-router'

// Importação das Views (Páginas)
import HomeView from '../views/HomeView.vue'
import AvaliacoesView from '../views/AvaliacoesView.vue'
import RankingView from '../views/RankingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Dashboard - Campeonato de Cafés' }
  },
  {
    path: '/avaliacoes',
    name: 'avaliacoes',
    component: () => import('../views/AvaliacoesView.vue'),
    meta: { title: 'Avaliações' }
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: () => import('../views/RankingView.vue'),
    meta: { title: 'Ranking Geral' }
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: () => import('../views/FormularioView.vue'),
    meta: { title: 'Formulário de Avaliação' }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Scroll behavior (voltar ao topo ao mudar de rota)
  scrollBehavior() {
    return { top: 0 }
  }
})

// Atualizar título da página dinamicamente
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Campeonato SCA'
  next()
})

export default router
