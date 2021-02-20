<template>
  <MainLayoutWrapper>
    <div>
      <h1>List of {{deptName}} in Dept.</h1>
    </div>
    <BaseCard v-for="member in members" :key="member.id">
      <User :user="member"/>
    </BaseCard>
  </MainLayoutWrapper>
</template>

<script>
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import BaseCard from "@/components/BaseCard";
import User from "@/components/User"


export default {
  name: "TeamMemberPage",
  components: {
    MainLayoutWrapper,
    BaseCard,
    User,
  },
  computed: {
    members() {
      return this.$store.getters.getFilteredUsers(this.$route.params.deptId);
    },
    deptName() {
      return this.$store.getters.getDeptName(this.$route.params.deptId)
    }
  },
};
</script>

<style lang="scss" scoped></style>
