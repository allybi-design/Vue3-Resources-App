<template>
  <NavBar />
  <div class="container mt-3">
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "app",
  components: { NavBar },
};
</script>

<style>
a {
  text-decoration: none !important;
}

a.active,
a.exact-active {
  text-decoration: underline !important;
}
</style>
