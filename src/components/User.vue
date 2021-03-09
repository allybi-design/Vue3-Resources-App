<template>
  <h3>{{ user.name }}</h3>
  <img
    src="https://picsum.photos/seed/picsum/100?random=1"
    class="mx-auto img-thumbnail"
  />
  <p class="p-2">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis impedit
    odit porro et hic neque quidem sed. Corrupti consequatur incidunt illum
    numquam et voluptatibus rem quod voluptatem velit vel temporibus qui,
    sapiente magni excepturi molestiae repellat est maiores modi blanditiis!
    Odit at tempore voluptatibus optio voluptas illum accusantium numquam dolor.
    Accusamus hic quaerat distinctio assumenda iusto accusantium, quibusdam
    voluptate, esse voluptatum voluptatem molestiae nostrum consequatur? Eos,
    tenetur.
  </p>
  <button type="button" class="btn" :class="roleClass">
    {{ user.role }}
  </button>
</template>

<script>
export default {
  name: "User",
  props: ["user"],
  computed: {
    roleClass() {
      if (this.user.role.includes("Engineer")) {
        return "btn-primary";
      }
      if (this.user.role.includes("Designer")) {
        return "btn-success";
      }
      if (this.user.role.includes("Developer")) {
        return "btn-danger";
      }
      return null;
    },
  },
};
</script>

<style scoped></style>
