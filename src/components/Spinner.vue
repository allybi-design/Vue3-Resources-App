<template>
  <Modal v-if="isModalOpen">
    <div class="spinner">
      <fa-icon
        :icon="runningIcon"
        size="10x"
        spin="true"
        class="text-white"
      />
    </div>
  </Modal>
</template>

<script>
import { faSync } from "@fortawesome/free-solid-svg-icons";

import { mapGetters } from "vuex";
export default {
  name: "Spinner",
  // props: ["isModelOpen"],
  data() {
    return {
      runningIcon: faSync,
    };
  },
  computed: {
    ...mapGetters({
      isModalOpen: "getIsModalOpen",
    }),
  },
};
</script>

<style lang="scss" scoped>
.spinner {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 1rem;
  border-radius: 4px;
  border: none;
  z-index: 10;

}
</style>
