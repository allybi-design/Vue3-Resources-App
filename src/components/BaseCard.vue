<template>
  <div class="card p-3 mb-3 rounded" :class="classes">
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "BaseCard",
  props: {
    bgColor: {
      type: String,
      default: "light",
    },
    txtColor: {
      type: String,
      default: "dark",
    },
    shadow: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        shadow: props.shadow,
        [`bg-${props.bgColor}`]: props.bgColor,
        [`text-${props.txtColor}`]: props.txtColor,
      })),
    };
  },
};
</script>
