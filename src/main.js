import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue"
import './index.scss'

import App from './root/App.vue'
import About from "./components/about-us/index.vue"
import Features from "./components/features/index.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/about", component: About },
        { path: "/features", component: Features },
    ]

});

const app = createApp(App)

app.use(router)

app.mount("#app")