<template>
  <transition-group class="list-group" tag="ul" name="usersList">
    <li class="list-group-item" v-for="(user, index) in users" :key="index">
      <h5 @click="removeUser(index)">
        {{ user }}
      </h5>
    </li>
  </transition-group>

  <div class="pt-2">
    <input type="text" v-model="newUserName" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  name: "ListData",
  data() {
    return {
      newUserName: null,
      users: ["Tom", "Sue", "Bob", "Jim"],
    };
  },
  methods: {
    removeUser(index) {
      this.users.splice(index, 1);
    },
    addUser() {
      this.users.push(this.newUserName);
      this.newUserName = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.usersList-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.usersList-enter-active {
  transition: all 1s ease-out;
}

.usersList-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.usersList-leave-from {
  opacity: 1;
}

.usersList-leave-active {
  position: absolute;
  transition: all 1s ease-out;
}

.usersList-leave-to {
  transform: translateX(-100vw);
}

.usersList-move {
  transition: transform 0.1s ease;
}
</style>
