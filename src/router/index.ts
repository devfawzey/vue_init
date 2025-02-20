import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("@/views/HomeView.vue"),
        },
        {
            path: "/product/:id",
            children: [
                {
                    path: "reviews",
                    component: () => import("@/views/ProductReviewView.vue"),
                },
            ]
        },
    ],
})

export default router
