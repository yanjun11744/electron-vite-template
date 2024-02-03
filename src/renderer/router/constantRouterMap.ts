import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    { path: '/:pathMatch(.*)*', component: () => import("@renderer/views/404.vue") },
    { path: '/', name: '总览', component: () => import('@renderer/components/LandingPage.vue') },
    { path: '/tools', name: '工具', component: () => import('@renderer/views/tools/tools.vue') },
]

export default routes
