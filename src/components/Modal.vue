<template>
  <div>
    <transition name="bg-fade-Anim">
      <div v-if="open" class="modal-bg" @click="closeModal"></div>
    </transition>

    <transition name="dialog-slide-Anim">
      <div class="modal-slot" v-if="open" @click="closeModal">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["open"],
  emits: ["closeModal"],
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
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
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 3px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
}

.dialog-slide-Anim-enter-active {
  animation: dialogSlide 0.25s ease-out;
}

.dialog-slide-Anim-leave-active {
  animation: dialogSlide 0.1s ease-in reverse;
}

.bg-fade-Anim-enter-active {
  animation: bg-fade 0.1s ease-out;
}
.bg-fade-Anim-leave-active {
  animation: bg-fade 0.5s ease-in reverse;
}

@keyframes dialogSlide {
  0% {
    transform: translateY(125px);
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
