<template>
  <div class="titleBar text-center">
    <h1>Routes</h1>
  </div>

  <NavBar />

  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>
<style>
.titleBar {
  background-color: rgb(212, 212, 212);
  padding: 1rem 0;
}

a.active {
  color: #ff0000;
  text-decoration: underline !important;
}

a.exact-active {
  color: #00ff00;
  text-decoration: underline !important;
}
</style>
