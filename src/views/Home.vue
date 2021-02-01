<template>
  <NavBar />
  <MainLayoutWrapper>
    <BaseCard>
      <Form />
    </BaseCard>
  </MainLayoutWrapper>
</template>

<script>
// @ is an alias to /src

import NavBar from "@/components/NavBar";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import BaseCard from "@/components/BaseCard";
import Form from "@/components/Form";

export default {
  name: "Home",
  components: {
    NavBar,
    MainLayoutWrapper,
    BaseCard,
    Form,
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
