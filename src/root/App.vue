<template>
  <div>
    <Home />
    <RouterView></RouterView>
  </div>
</template>

<script>
import Home from "../components/home/index.vue"
export default {
  components: {
    Home
  }
}
</script>

<style></style>