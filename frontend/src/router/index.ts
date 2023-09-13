import { createRouter, createWebHistory } from 'vue-router'
import Connexion from '../views/Connexion.vue' 
import Profil from '../views/Profil.vue' 
import Chat from '../views/Chat.vue' 
import Pong from '../views/Pong.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'connexion',
      component: Connexion
    },
    {
      path: '/profil',
      name: 'profil',
      component: Profil
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },    
    {
      path: '/pong',
      name: 'pong',
      component: Pong
    },
  ]
})

export default router
