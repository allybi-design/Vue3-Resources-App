<template>
  <ul class="list-group">
    <Resource
      :item="item"
      v-for="item in resources"
      :key="item.id"
    />
  </ul>
</template>

<script>
import Resource from "@/components/LearningResources/Resource.vue";

export default {
  name: "ResourceList",
  inject: ["resources", ],
  components: {
    Resource,
  },
};
</script>

