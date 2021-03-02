<template>
  <div class="titleBar text-center">
    <h1>Vuex</h1>
  </div>
  <MainLayoutWrapper id="mainWrapper">
    <NavBar />
    <router-view></router-view>
  </MainLayoutWrapper>
</template>

<script>
import MainLayoutWrapper from "./components/MainLayoutWrapper.vue";
import NavBar from "./components/NavBar";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "app",
  components: { MainLayoutWrapper, NavBar },
  computed: {
    ...mapGetters({
      isAuth: "getIsUserAuth",
    }),
  },
  methods: {
    ...mapActions(),

    // add(value) {
    //   this.incCounter(value);
    // },
    // inc(value) {
    //   this.INC_COUNTER(value);
    // },
  },
};
</script>

<style>
.titleBar {
  background-color: rgb(212, 212, 212);
  padding: 1rem 0;
}
</style>
