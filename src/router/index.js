import { createRouter, createWebHistory } from 'vue-router'

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
    path: '/cafe',
    name: 'cafe',
    component: () => import('../views/CafeView.vue'),
    meta: { title: 'Cafés' }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Campeonato de Cafés'
  next()
})
export default router
