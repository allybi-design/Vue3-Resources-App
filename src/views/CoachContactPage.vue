<template>
  <BaseCard>
    <header class="text-center">
      <h1>Contact Coach</h1>
    </header>
    <BaseCard shadow>
      <CoachContactForm @onCoachContact="onCoachContact" />
    </BaseCard>
  </BaseCard>
</template>

<script>
import CoachContactForm from "../components/CoachContactForm";
import { mapActions } from "vuex";

export default {
  name: "CoachContactPage",
  components: { CoachContactForm },
  methods: {
    ...mapActions(["saveCoachContact"]),

    onCoachContact(formData) {
      this.saveCoachContact(formData);
    },
  },
};
</script>
