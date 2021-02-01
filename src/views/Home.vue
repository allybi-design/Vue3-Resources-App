<template>
  <NavBar />
  <MainLayoutWrapper>
    <button
      class="me-2 btn"
      type="button"
      :class="listClassActive"
      @click="selectComponent('ResourceList')"
    >
      List Resources
    </button>
    <button
      class="btn"
      type="button"
      :class="addClassActive"
      @click="selectComponent('ResourceAdd')"
    >
      Add Resources
    </button>

    <keep-alive>
      <component :is="selectedComponent" />
    </keep-alive>
  </MainLayoutWrapper>
</template>

<script>
// @ is an alias to /src
import ResourceList from "@/components/LearningResources/ResourceList";
import ResourceAdd from "@/components/LearningResources/ResourceAdd";
import NavBar from "@/components/NavBar";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";

export default {
  name: "Home",
  components: {
    ResourceList,
    ResourceAdd,
    NavBar,
    MainLayoutWrapper,
  },
  data() {
    return {
      selectedComponent: "ResourceAdd",
      storedResources: [
        {
          id: "vue-guide",
          title: "Vue 3 Guide",
          desc: "The official Vue.js Docs",
          link: "https://v3.vuejs.org/",
        },
        {
          id: "google-home",
          title: "Google Home Page",
          desc: "The start of all adventures",
          link: "https://www.google.co.uk/",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      delResource: this.delResource,
    };
  },
  computed: {
    listClassActive() {
      return this.selectedComponent === "ResourceList"
        ? "btn-primary"
        : "btn-link btn-outline-primary";
    },
    addClassActive() {
      return this.selectedComponent === "ResourceAdd"
        ? "btn-primary"
        : "btn-link btn-outline-primary";
    },
  },
  methods: {
    selectComponent(selected) {
      this.selectedComponent = selected;
    },
    addResource(newResource) {
      this.storedResources.unshift(newResource);
      this.selectedComponent = "ResourceList";
    },
    delResource(id) {
      const index = this.storedResources.findIndex(item => item.id === id)
      this.storedResources.splice(index, 1)
    },
  },
};
</script>
