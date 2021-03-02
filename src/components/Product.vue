<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col">
        <img :src="product.image" :alt="product.title" />
      </div>
      <div class="col">
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">
            {{ product.description }}
          </p>
          <p class="card-text">£{{ product.price }}</p>
          <p class="card-text">
            <button class="btn btn-primary" @click="cartAdd(product)">
              Add to Cart
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Product",
  props: ["product"],
  data() {
    return {};
  },
  methods: {
    ...mapActions(["addtoCart"]),

    cartAdd(product) {
      this.addtoCart({
        id: product.id,
        price: product.price,
        qty: 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
