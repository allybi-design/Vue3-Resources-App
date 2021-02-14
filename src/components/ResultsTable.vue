<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Rateing</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(result, index) in experiences" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ result.name }}</td>
        <td>{{ result.rateing }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Results Table",
  props: ["experiences"],
};
</script>

<style lang="scss" scoped></style>
