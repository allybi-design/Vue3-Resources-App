<template>
  <div key="bg" class="modal-bg" @click="closeModal" />

  <slot />
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

<style lang="css" scopped>
.modal-bg {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
