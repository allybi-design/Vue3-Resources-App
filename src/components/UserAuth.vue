<template>
  <button v-if="!isAuth" class="btn btn-primary" @click="logIn">Login</button>
  <button v-if="isAuth" class="btn btn-primary" @click="logOut">LogOut</button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UserAuth",

  computed: {
    ...mapGetters({
      isAuth: "getIsUserAuth",
    }),
  },
  methods: {
    ...mapActions(["signIn", "signOut"]),

    logIn() {
      this.signIn();
    },
    logOut() {
      this.signOut();
      this.$router.push("/")
    },
  },
};
</script>

<style lang="scss" scoped></style>
