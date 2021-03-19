<template>
  <button v-if="!isUserAuth" class="btn btn-primary" @click="logIn">
    Login/Register
  </button>
  <button v-if="isUserAuth" class="btn btn-primary" @click="logOut">LogOut</button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UserAuth",

  computed: {
    ...mapGetters({
      isUserAuth: "getIsUserAuth",
      // isUser: "getUser",
    }),
  },
  methods: {
    ...mapActions(["signOut", "toggleModal"]),

    logIn() {
      this.toggleModal();
    },
    logOut() {
      this.signOut();
      this.$router.push("/");
    },
  },
};
</script>


