import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Main.vue'
import Legal from '../views/Legal.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/legal', name: 'legal', component: Legal }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to) => {
  let metaRobots = document.querySelector('meta[name="robots"]');
  
  if (!metaRobots) {
    metaRobots = document.createElement('meta');
    metaRobots.name = "robots";
    document.head.appendChild(metaRobots);
  }

  if (to.name === 'legal') {
    metaRobots.content = "noindex, nofollow";
  } else {
    metaRobots.content = "index, follow";
  }
});

export default router