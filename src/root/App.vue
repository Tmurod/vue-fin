<template>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque delectus placeat sit natus perspiciatis, libero
    cupiditate, ab, quod harum sed beatae ex unde laudantium nulla impedit! Molestias minus dolor dolorem.
    <router-link to="/about">about</router-link>
    <router-link to="/features">features</router-link>
  </div>
</template>

<script>
import navbar from "../components/navbar/index.vue";

export default {
  components: {
    navbar
  },

  data() {
    return {
      navbar: [
        {
          id: 1,
          title: "Home",
          hidden: false
        },
        {
          id: 2,
          title: "About us",
          hidden: false
        },
        {
          id: 3,
          title: "Features",
          hidden: false
        }
      ]
    }
  },
}
</script>

<style></style>