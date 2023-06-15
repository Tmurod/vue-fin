<template>
    <section>
        <div class="container">
            <header>
                <p v-for="(val, ind) in navbar">
                    {{ val.title }}
                </p>
            </header>
        </div>
    </section>
</template>

<script>
import logo from "../../assets/icons/logo.svg";

export default {
    props: {
        navbar: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
section {
    background: #1C1E53;
}
</style>