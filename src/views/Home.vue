<template>
  <NavBar />
  <MainLayoutWrapper>
    <BaseCard>
      <h2>How was your leaning Experience?</h2>
      <Form />
    </BaseCard>
    <BaseCard>
      <h2>Submitted Experiences</h2>
      <Loaded />
    </BaseCard>
  </MainLayoutWrapper>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import BaseCard from "@/components/BaseCard";
import Form from "@/components/Form";
import Loaded from "@/components/Loaded"


export default {
  name: "Home",
  components: {
    NavBar,
    MainLayoutWrapper,
    BaseCard,
    Form,
    Loaded,

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
