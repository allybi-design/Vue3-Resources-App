<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container ">
      <router-link class="navbar-brand" to="/">
        <fa-layers full-width class="fa-2x">
          <fa-icon :icon="runningIcon" />
        </fa-layers>
      </router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-if="isAuth" class="nav-item">
            <router-link class="nav-link " to="/coaches">Coaches</router-link>
          </li>
          <li v-if="isAuth" class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li v-if="isAuth" class="nav-item">
            <router-link class="nav-link" to="/requests">Request</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact-us"
              >Contact Us</router-link
            >
          </li>
        </ul>
      </div>
      >
      
      <div class="d-flex">
        <userAuth />
      </div>
    </div>
  </nav>
</template>

<script>
import UserAuth from "../components/UserAuth";

import { mapGetters } from "vuex";

import { faRunning } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "NavBar",
  components: {
    UserAuth,
  },
  data() {
    return {
      runningIcon: faRunning,
    };
  },
  computed: {
    ...mapGetters({
      userId: "getUserId",
      isAuth: "getIsUserAuth",
    }),
  },
};
</script>


