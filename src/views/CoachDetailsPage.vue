<template>
  <h1 v-if="selectedCoach === undefined">No Coach with that ID found</h1>

  <BaseCard v-else shadow>
    <div class="d-flex align-items-start">
      <div class="details col-2">
        <div class="text-center">
          <img :src="avatarImage" class="img-thumbnail mx-auto" />
          <h4>{{ fullName }}</h4>
        </div>

        <div class="btn-group" v-for="area in selectedCoach.areas" :key="area">
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

      <div class="description">
        <div class="col-12 px-1 text-justify">
          <h4>About Me</h4>
          <p v-html="selectedCoach.description" />
          <h5>I start from £{{ selectedCoach.hourlyRate }}/hour</h5>
          <BaseButton olColor="primary">
            Contact {{ selectedCoach.firstName }}
          </BaseButton>
        </div>
      </div>
    </div>
  </BaseCard>

  <router-view />
</template>

<script>
export default {
  name: "CoachDetailsPage",
  props: ["id"],
  data() {
    return {
      selectedCoach: undefined,
    };
  },
  created() {
    this.selectedCoach = this.$store.getters.getCoachById(this.id);

    if (this.selectedCoach === undefined) {
      setTimeout(() => {
        this.$router.back();
      }, 3000);
    }
  },
  computed: {
    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
    },
    avatarImage() {
      if (!this.selectedCoach) return;
      return require(`@/assets/img/${this.selectedCoach.avatar.toLowerCase()}`);
    },
    contactLink() {
      return `${this.$router.path}/contact`;
    },
  },
};
</script>
