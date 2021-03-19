<template>
  <BaseCard>
    <header class="text-center">
      <h1>Register as a New Coach</h1>
    </header>
    <BaseCard shadow>
      <CoachForm @saveFormData="saveFormData" />
    </BaseCard>
  </BaseCard>
</template>

<script>
import CoachForm from "@/components/CoachForm";

export default {
  name: "CoachRegisterPage",
  components: {
    CoachForm,
  },

  methods: {
    saveFormData(formData) {
      this.$store.dispatch("saveNewCoach", formData);
    },
  },
};
</script>

