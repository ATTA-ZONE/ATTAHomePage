import {RouteRecordRaw, createRouter, createWebHashHistory} from 'vue-router'
const routes:RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: () => import('../views/home/home.vue') }
]

const router = createRouter({
	history: createWebHashHistory(),
  routes,
})
export default router