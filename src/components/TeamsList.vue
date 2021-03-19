<template>
  <BaseCard v-for="team in teams" :key="team.name">
    <Team :team="team" />
  </BaseCard>
</template>

<script>
import BaseCard from "@/components/BaseCard";
import Team from "@/components/Team";

export default {
  name: "TeamsList",
  props: ["teams"],
  components: {
    BaseCard,
    Team,
  },
};
</script>

