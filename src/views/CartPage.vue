<template>
  <BaseCard>
    <h3
      v-for="item in cart.items"
      :key="item.id"
      @click="removeProduct(item.id)"
    >
      id:{{ item.id }} * Qty: {{ item.qty }}
    </h3>
    <h4>£{{ cart.total.toFixed(2) }}</h4>
    <h4>Total number of Items:{{ cart.qty }}</h4>
  </BaseCard>
</template>

<script>
import BaseCard from "../components/BaseCard.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartPage",
  components: { BaseCard },
  computed: {
    ...mapGetters({
      cart: "getCart",
    }),
  },
  methods: {
    ...mapActions(["removeFromCart"]),

    removeProduct(prodId) {
      this.removeFromCart({
        id: prodId,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
