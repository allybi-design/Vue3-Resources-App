<template>
  <MainLayoutWrapper>
    <TeamsList :teams="teams" />
   
  </MainLayoutWrapper>
</template>

<script>
// import NavBar from "@/components/NavBar";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import TeamsList from "@/components/TeamsList";

export default {
  name: "TeamsPage",
  components: {
    TeamsList,
    MainLayoutWrapper,
  },
  computed: {
    teams() {
      return this.$store.state.teams;
    },
  },
  beforeRouteEnter (to, from, next) {
    console.log("This Route guard is call WITHIN the component before Enter")
    console.log(to, from)
    next()
  },
};
</script>

<style lang="scss" scoped></style>
