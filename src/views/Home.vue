<template>
  <NavBar />
  <MainLayoutWrapper> </MainLayoutWrapper>
</template>

<script>
// @ is an alias to /src

import NavBar from "@/components/NavBar";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";

export default {
  name: "Home",
  components: {
    NavBar,
    MainLayoutWrapper,
  },
  data() {
    return {};
  },
  provide() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
