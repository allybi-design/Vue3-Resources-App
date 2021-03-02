<template>
  <BaseCard v-for="product in products" :key="product.id">
    <Product :product="product"/>
  </BaseCard>
</template>

<script>
import BaseCard from "../components/BaseCard.vue";
import Product from "../components/Product.vue"

import { mapGetters } from "vuex";

export default {
  name: "ProductsPage",
  components: { BaseCard, Product },
  computed: {
    ...mapGetters({
      products: "getProducts",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
