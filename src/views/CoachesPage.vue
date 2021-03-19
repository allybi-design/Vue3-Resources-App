<template>
  <CoachFilter @filtersChanged="setFilters" />

  <BaseCard>
    <div class="controls">
      <BaseButton v-if="!isUserCoach" olColor="primary" class="mb-4">
        <router-link to="/coach-register">
          Register as a Coach
        </router-link>
      </BaseButton>
    </div>
    <ul class="list-group" v-if="hasCoaches">
      <CoachsList
        v-for="coach in filteredCoaches"
        :key="coach.uid"
        :coach="coach"
      />
    </ul>
    <h3 v-else>No Coaches Found</h3>
  </BaseCard>

 
</template>

<script>
import CoachsList from "../components/CoachsList";
import CoachFilter from "../components/CoachFilter";

import { mapGetters } from "vuex";

export default {
  name: "CoachesListPage",
  components: {
    CoachsList,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    ...mapGetters({
      userId: "getUserId",
      isUserCoach: "getIsUserCoach",
      hasCoaches: "getHasCoaches",
      coaches : "getCoaches"
    }),

    filteredCoaches() {
      return this.coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = {
        ...updatedFilters,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
