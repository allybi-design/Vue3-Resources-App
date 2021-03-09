<template>
  <div class="form-check">
    <input
      class="btn-check"
      type="checkbox"
      :checked="checked"
      :id="fieldId"
      :name="value"
      v-bind="$attrs"
      @input="check()"
    />
    <label class="btn btn-outline-primary" :for="fieldId">
      {{ value }}
    </label>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  emits: ["update:names"],
  props: {
    value: {
      type: String,
      required: true,
    },
    fieldId: {
      type: String,
      required: true,
    },
    names: {
      type: Array,
      required: true,
    },
  },
  setup(props, context) {
    const checked = computed(() => props.names.includes(props.value));

    function check() {
      let updatedNames = [...props.names];
      if (this.checked) {
        updatedNames.splice(updatedNames.indexOf(props.value), 1);
      } else {
        updatedNames.push(props.value);
      }
      context.emit("update:names", updatedNames);
    }

    return {
      check,
      checked,
    };
  },
};
</script>

<style></style>
