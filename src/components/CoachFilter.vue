<template>
  <BaseCard>
    <h2>Find your coach:</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">Career</label>
    </span>
  </BaseCard>
</template>

<script>
export default {
  name: "CoachFilter",
  emits: ["filtersChanged"],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      this.filters[event.target.id] = event.target.checked;
      this.$emit("filtersChanged", this.filters);
    },
  },
};
</script>

<style lang="scss" scoped></style>
