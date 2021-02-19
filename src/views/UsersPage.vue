<template>
  <MainLayoutWrapper>
    <UsersList :users="users" />
  </MainLayoutWrapper>
</template>

<script>
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import UsersList from "@/components/UsersList";

export default {
  name: "UsersPage",
  components: {
    MainLayoutWrapper,
    UsersList,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
};
</script>

<style lang="scss" scoped></style>
