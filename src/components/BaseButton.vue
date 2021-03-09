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

<style scoped>
.storybook-button {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: #001413 0px 0px 0px 1px inset;
}
.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>
