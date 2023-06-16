import { createRouter, createWebHistory } from "vue-router";

import About from "../components/about-us/index.vue"
import Features from "../components/features/index.vue"

const router = createRouter({
    history: createWebHistory(),
    path: [
        { path: "/about", component: About },
        { path: "/features", component: Features },
    ]
});

export default router