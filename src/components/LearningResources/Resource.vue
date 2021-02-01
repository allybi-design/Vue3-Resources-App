<template>
  <Basecard>
    <header class="learningResource--header">
      <h3>{{ item.title }}</h3>
      <button class="btn btn-primary" @click="delResource(item.id)">Delete</button>
    </header>
    <p>
      {{ item.desc }}
    </p>
    <nav class="nav">
      <a class="nav-link" :href="item.link" target="_blank"
        >Click Link Here...</a
      >
    </nav>
  </Basecard>
</template>

<script>
import Basecard from "@/components/BaseComps/Basecard";

export default {
  components: { Basecard },
  name: "Learning resource",
  inject: ["delResource"],
  props: ["item"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.learningResource--header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
