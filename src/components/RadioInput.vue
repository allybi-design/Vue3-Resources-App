<template>
  <div class="mb-3">
    <label class="form-check-label" for="rateingRadios">
      {{ label }}
    </label>
    <div class="form-check" v-for="(option, index) in options" :key="index">
      <input
        class="form-check-input"
        type="radio"
        name="exampleRadios"
        :value="option"
        @change="activate(option)"
      />
      <label class="form-check-label" for="rateingRadios">
        {{ option }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioInput",
  props: ["label",  "options", "modelValue",],
  emits: ["update:modelValue"],
  computed: {
    activeOption() {
      return this.modelValue;
    },
  },
  methods: {
    activate(option) {
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style lang="scss" scoped></style>
