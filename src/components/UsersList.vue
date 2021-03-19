<template>
  <BaseCard v-for="user in users" :key="user.name">
    <User :user="user"/>
  </BaseCard>
</template>

<script>
import BaseCard from "@/components/BaseCard";
import User from "@/components/User"

export default {
  name: "UsersList",
  props: ["users"],
  components: {
    BaseCard,
    User,
  },
 
};
</script>

