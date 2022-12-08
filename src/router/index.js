import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MovieList from '../views/MovieList.vue'
import PageMovie from '../views/PageMovie.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pagemovie',
      name: 'pagemovie',
      component: PageMovie,
      props: route => ({ movieId: route.query.q })

    },

    {
      path: '/movielist',
      name: 'movielist',
      component: MovieList,
      props: () => ({movieList: JSON.parse(history.state.movies_list)})
    }],
})

export default router
