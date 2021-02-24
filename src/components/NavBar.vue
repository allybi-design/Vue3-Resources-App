<template>
  <nav class="navbar navbar-expand ">
    <div class="container ">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link " to="/">Home Page</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Page</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped></style>
