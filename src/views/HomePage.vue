<template>
  <main class="centerPage">
    <button class="signRegBtn" @click="openModal">Click to Sign In...</button>
  </main>

  <teleport to="body">
    <RegisterForm v-if="isModalOpen" />
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

<style lang="css">
.signRegBtn {
  font-size: 3em;
  padding: 0.25em 1.75em;
  border-radius: 100px;
  font-style: italic;
  background-color: transparent;
  color: white;
  border: 2px solid #fff;
  align-self: center;
}
</style>
