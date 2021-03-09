<template>
  <BaseCard shadow>
    <li class="d-flex justify-content-between align-items-end">
      <div class="details">
        <h3>{{ fullName }}</h3>
        <h4>£{{ rate }}/hour</h4>

        <div class="btn-group" v-for="area in areas" :key="area">
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
          <router-link :to="contactLink">Contact - {{ firstName }} </router-link>
        </BaseButton>

        <BaseButton olColor="primary">
          <router-link :to="detailsLink"> View Details</router-link>
        </BaseButton>
      </div>
    </li>
  </BaseCard>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  name: "CoachList",
  props: ["id", "firstName", "lastName", "rate", "areas"],
  components: { BaseButton },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    contactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    detailsLink() {
      return `${this.$route.path}/${this.id}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
