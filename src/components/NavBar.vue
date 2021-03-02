<template>
  <nav class="navbar navbar-expand ">
    <div class="container ">
      <router-link class="navbar-brand" to="/">
        <fa-layers full-width class="fa-2x">
          <fa-icon :icon="userSecretIcon" />
          <!-- <fa-layers-text
            class="text-danger"
            transform="shrink-4"
            value="User Secret"
          /> -->
        </fa-layers>
      </router-link>

      <router-link class="nav-link" to="/about">About</router-link>
      <div class="collapse navbar-collapse">
        <ul v-if="isAuth" class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link " to="/products"
              >Products
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">Cart</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="isAuth" class="">Cart Qty:{{ cartQty }}</div>

    <div class="d-flex">
      <userAuth />
    </div>
  </nav>
</template>

<script>
import UserAuth from "../components/UserAuth";

import { mapGetters } from "vuex";

// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faCrown } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "NavBar",
  components: {
    UserAuth,
  },
  data() {
    return {
      crownIcon: faCrown,
      userSecretIcon: faUserSecret,
    };
  },
  computed: {
    ...mapGetters({
      isAuth: "getIsUserAuth",
      cartQty: "getCartQty",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
