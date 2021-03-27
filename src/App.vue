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
body {
  background: url("./assets/img/space-generic-1.jpg") no-repeat 0 0 / cover;
}

a {
  text-decoration: none !important;
}

a.active,
a.exact-active {
  text-decoration: underline !important;
}

.centerPage {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  border-radius: 4px;

}
</style>
