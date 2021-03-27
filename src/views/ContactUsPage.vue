<template>
  <main class="text-center mt-5">
    <BaseButton bgColor="primary" @click="openModal">
      Click to Open Spinner
    </BaseButton>
  </main>

  <teleport to="body">
    <Spinner v-if="isModalOpen" />
  </teleport>
</template>

<script>
import Spinner from "@/components/Spinner";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "ContactUsPage",
  components: {
    Spinner,
  },
  computed: {
    ...mapGetters({
      isModalOpen: "getIsModalOpen",
    }),
  },
  methods: {
    ...mapActions(["toggleModal"]),

    openModal() {
      this.toggleModal();
    },
  },
};
</script>
