<template>
  <div id="SubMit Button" class="mt-3 col-12">
    <button class="btn btn-success" type="submit">
      {{label}}
    </button>
  </div>
</template>

<script>
export default {
  name: "SubmitButton",
  props: ["label"]
};
</script>

<style lang="scss" scoped></style>
