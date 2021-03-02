<template>
  <div class="titleBar text-center">
    <h1>Main Project</h1>
  </div>
  <MainLayoutWrapper id="mainWrapper">
    <NavBar />
    <router-view></router-view>
  </MainLayoutWrapper>
</template>

<script>
import MainLayoutWrapper from "./components/MainLayoutWrapper.vue";
import NavBar from "./components/NavBar";

export default {
  name: "app",
  components: { MainLayoutWrapper, NavBar },
};
</script>

<style>
.titleBar {
  background-color: rgb(212, 212, 212);
  padding: 1rem 0;
}

a.active {
  text-decoration: underline !important;
}
</style>
