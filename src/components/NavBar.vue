<template>
  <nav class="navbar navbar-expand ">
    <div class="container ">
      <router-link class="navbar-brand" to="/">Navbar</router-link>
      <router-link class="navbar-item" to="/about">About</router-link>
      <div class="collapse navbar-collapse">
        <ul v-if="isAuth" class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link " to="/products">Products </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">Cart</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="isAuth" class="d-flex">
      Items in Cart {{cartQty}}
    </div>
    <div class="d-flex">
      <userAuth />
    </div>
  </nav>
</template>

<script>
import UserAuth from "../components/UserAuth";

import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  components: {
    UserAuth,
  },
  computed: {
    ...mapGetters({
      isAuth: "getIsUserAuth",
      cartQty: "getCartQty"
    }),
  },
};
</script>

<style lang="scss" scoped></style>
