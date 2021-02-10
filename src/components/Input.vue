<template>
  <div class="mb-3">
    <label class="form-label">{{ label }}:</label>
    <input
      class="form-control"
      :type="type"
      :placeHolder="placeHolder"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      @blur="$emit('hasBlured')"
    />
    <p v-if="isFieldInValid" class="invalid-feedback">
     {{validationMessage}}
    </p>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: {
      type: String,
      required: true
    },
    placeHolder: {
      type: String,
      required: true
    },
    type: {
      type: String,
    }, 
    value: {
      type: [String, Number, Boolean, Array],
      required: true
    },
    isFieldInValid: {
      type: Boolean,
    }, 
    validationMessage: {
      type: String
    }
  },
  emits: ["update:value", "hasBlured"],
};
</script>

<style lang="scss" scoped>
.invalid-feedback {
  display: block !important;
}
</style>
