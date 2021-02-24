<template>
  <div class="titleBar text-center">
    <h1>Animations</h1>
  </div>
  <MainLayoutWrapper id="mainWrapper">
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component" />
      </transition>
    </router-view>
  </MainLayoutWrapper>
</template>

<script>
import MainLayoutWrapper from "./components/MainLayoutWrapper.vue";

export default {
  components: { MainLayoutWrapper },
  name: "app",
};
</script>

<style>
.titleBar {
  background-color: rgb(212, 212, 212);
  padding: 1rem 0;
}

.route-enter-active {
  animation: fade .2s ease-out reverse;
}
.route-leave-active {
  animation: fade .2s ease-out;
}

@keyframes fade {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
