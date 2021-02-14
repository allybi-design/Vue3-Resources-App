<template>
  <div>
    <SubmitButton label="Load Submitted Experiences" @click="loadData" />

    <h1 v-if="isloading">Loading.....</h1>
    <ResultsTable v-else :experiences="experiences" />
  </div>
</template>

<script>
import SubmitButton from "@/components/Submit";
import ResultsTable from "@/components/ResultsTable";

export default {
  name: "Loaded",
  components: {
    SubmitButton,
    ResultsTable,
  },
  data() {
    return {
      experiences: [],
      isloading: true,
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      this.isloading = true;

      await fetch(
        "https://vue3-hhtp-request-default-rtdb.europe-west1.firebasedatabase.app/surveys.json"
      )
        .then((res) => {
          // console.log(res);
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          // console.log(data);
          let results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rateing: data[id].rateing,
            });
          }

          this.experiences = results;
        });

      this.isloading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
