<template>
  <section>
    <CoachFilter @filtersChanged="setFilters" />
  </section>

  <section>
    <BaseCard>
      <div class="controls">
        <BaseButton olColor="primary" class="mb-4">
          <router-link to="/coach-register">
            Register as a Coach
          </router-link>
        </BaseButton>
      </div>
      <ul class="list-group" v-if="hasCoaches">
        <CoachsList
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        />
      </ul>
      <h3 v-else>No Coaches Found</h3>
    </BaseCard>
  </section>
</template>

<script>
import CoachsList from "../components/CoachsList";
import CoachFilter from "../components/CoachFilter";

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
    filteredCoaches() {
      const coaches = this.$store.getters.getCoaches;
      return coaches.filter((coach) => {
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
    hasCoaches() {
      return this.$store.getters.hasCoaches;
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
