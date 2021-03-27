<template>
  <main class="centered">
    <!-- <BaseButton v-if="!isUserAuth" bgColor="primary" @click="openModal"> -->
    Click to Sign In
    <!-- </BaseButton> -->
  </main>

  <teleport to="body">
    <RegisterForm />
  </teleport>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    RegisterForm,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      isUserAuth: "getIsUserAuth",
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

<style lang="scss">
main.centered {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
</style>
