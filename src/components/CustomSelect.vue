<template>
  <div class="mb-3">
    <label class="form-label">{{ label }}</label>
    <select
      class="form-select"
      name="selection"
      @change="$emit('update:selectedValue', value)"
      :value="selectedValue"
    >
      <option v-for="option in options" :key="option" :name="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CustonSelection",
  props: ["label", "options", "selectedValue"],
  emit: ["update:selectedValue"],
};
</script>

<style lang="scss" scoped></style>
