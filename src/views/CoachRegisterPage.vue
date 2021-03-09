<template>
  <BaseCard>
    <header class="text-center">
      <h1>Register as a New Coach</h1>
    </header>

    <CoachForm @saveFormData="saveFormData" />
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
      this.$store.dispatch("addCoach", formData)
      // console.log(formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
