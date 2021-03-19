<template>
  <button type="button" :class="classes" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "BaseButton",
  props: {
    bgColor: {
      type: String,
    },
    txColor: {
      type: String,
    },
    olColor: {
      type: String,
    },
    size: {
      type: String,
      validator: function(value) {
        return ["sm", "lg"].indexOf(value) !== -1;
      },
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        btn: true,
        [`btn-${props.bgColor}`]: props.bgColor,
        [`text-${props.txColor}`]: props.txColor,
        [`btn-outline-${props.olColor}`]: props.olColor,
        [`btn-${props.size}`]: true,
      })),
      onClick() {
        emit("click");
      },
    };
  },
};
</script>


