import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "HomeView",
        component: ()=> import('@/pages/HomeView')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;