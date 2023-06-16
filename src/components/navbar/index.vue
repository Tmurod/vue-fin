<template>
    <div class="header d-flex justify-content-between">
        <img src="../../assets/icons/Logo.svg" alt="logo">
        <nav v-for="(val, ind) in navbar" :key="val.id">
            <a href="#">
                <router-link :to=val.to>{{ val.title }}</router-link>
            </a>
        </nav>
        <button>Contact us</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            navbar: [
                {
                    id: 1,
                    title: "Home",
                    hidden: false,
                    to: "/home"
                },
                {
                    id: 2,
                    title: "About us",
                    hidden: false,
                    to: "/about-us"
                },
                {
                    id: 3,
                    title: "Features",
                    hidden: false,
                    to: "/features"
                }
            ]
        }
    }
}
</script>

<style scoped>
.header {
    background: #1C1E53;
    color: red;
}
</style>