<template>
  <BaseCard shadow>
    <li class="d-flex justify-content-between align-items-end">
      <div class="details">
        <h3>{{ fullName }}</h3>
        <h4>£{{ coach.hourlyRate }}/hour</h4>
        <!-- <p>{{ coach.firstName }}'s Uid is:{{ coach.uid }}</p> -->
        <p v-if="isUserCoach">
          Your already registered with us! - {{ coach.uid }}
        </p>
        <div class="btn-group" v-for="area in coach.areas" :key="area">
          <BaseButton
            size="sm"
            bgColor="warning"
            olColor="primary"
            txColor="danger"
            class="mx-1"
          >
            {{ area }}
          </BaseButton>
        </div>
      </div>

      <div class="actions">
        <BaseButton olColor="primary">
          <router-link :to="contactLink"
            >Contact - {{ coach.firstName }}
          </router-link>
        </BaseButton>

        <BaseButton olColor="primary">
          <router-link :to="`${$route.path}/${coach.uid}`">
            View Details</router-link
          >
        </BaseButton>
      </div>
    </li>
  </BaseCard>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CoachListComp",
  props: ["coach"],
  computed: {
    ...mapGetters({
      userId: "getUserId",
      isUserCoach: "getIsUserCoach",
    }),

    fullName() {
      return `${this.coach.firstName} ${this.coach.lastName}`;
    },
    contactLink() {
      return `${this.$route.path}/${this.userId}/contact`;
    },
    detailsLink() {
      return `${this.$route.path}/${this.userId}`;
    },
  },
};
</script>
