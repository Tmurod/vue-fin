import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";

import './index.scss'
// import router from './router/router'

import App from './root/App.vue'
import About from "./components/about-us/index.vue"
import Features from "./components/features/index.vue"
import Home from "./components/home/index.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: "/home", component: Home, alias: "/" },
        { path: "/about", component: About },
        { path: "/features", component: Features },
    ]
});

const app = createApp(App)

app.use(router)

app.mount("#app")