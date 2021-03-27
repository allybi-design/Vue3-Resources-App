<template>
  <Modal>
    <div class="centerPage">
      <fa-icon :icon="runningIcon" size="10x" spin class="text-white" />
    </div>
  </Modal>
</template>

<script>
import { faSync } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Spinner",
  data() {
    return {
      runningIcon: faSync,
    };
  },
};
</script>
