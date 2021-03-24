<template>
  <main class="text-center mt-5">
    <BaseButton v-if="!isUserAuth" bgColor="primary" @click="openModal">
      Click to Sign In
    </BaseButton>
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


