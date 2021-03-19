<template>
  <transition-group name="bg-fade-Anim">
    <div key="bg" class="modal-bg" @click="closeModal" />

    <div key="slot" class="container">
      <slot />
    </div>
  </transition-group>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Modal",
  methods: {
    ...mapActions(["toggleModal"]),

    closeModal() {
      this.toggleModal();
    },
  },
};
</script>

<style>
.modal-bg {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

.modal-slot {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 1rem;
  border-radius: 4px;
  border: none;
  z-index: 10;
  background-color: white;
}

.dialog-slide-Anim-enter-active {
  animation: dialogSlide 0.25s ease-out;
}

.dialog-slide-Anim-leave-active {
  animation: dialogSlide 0.1s ease-in reverse;
}

.bg-fade-Anim-enter-active {
  animation: bg-fade 2s ease-out;
}
.bg-fade-Anim-leave-active {
  animation: bg-fade 2s ease-in reverse;
}

@keyframes dialogSlide {
  0% {
    transform: translateY(200px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes bg-fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
