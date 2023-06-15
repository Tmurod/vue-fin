<template>
  <div>
    <navbar :navbar="navbar" />
  </div>
</template>

<script>
import navbar from "../navbar/index.vue";

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