<template>
  <div class="modal" tabindex="-1" @click="closeModal">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content ">
        <div class="modal-header ">
          <h2 class="modal-title">Invalid Field Entered</h2>
          <button type="button" class="btn-close" ></button>
        </div>
        <div class="modal-body text-center">
          <h3>All Fields must be a valid type</h3>
          <h3>& are required</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["isModalOpen"],
  emits: ["close"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.7);
  display: block;
}
</style>
