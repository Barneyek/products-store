<template>
  <div class="section">
    <div class="container">
      <!-- Sorting -->
      <div class="margin-bottom-40">
        <div class="row align-items-center">
          <div class="col-12 col-sm-6">
            <p>Showing 1-9 of {{ products.length }} results</p>
          </div>
          <div class="col-12 col-sm-6 text-sm-right">
            <select class="custom-select">
              <option selected>Sort by latest</option>
              <option value="1">Sort by popularity</option>
              <option value="2">Sort by rating</option>
              <option value="3">Sort by price: high to low</option>
              <option value="4">Sort by price: low to high</option>
            </select>
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- Products -->
      <div class="row col-spacing-40">
        <div
          v-for="(el, index) in products"
          :key="index"
          class="col-12 col-md-6 col-lg-4"
        >
          <div class="product-box">
            <div class="product-img">
              <a href="#">
                <img :src="el.images[0]" :alt="el.title" />
                <img :src="el.images[1]" :alt="el.title" />
              </a>
              <div class="product-badge-left">
                <span
                  class="font-small uppercase font-family-secondary font-weight-medium"
                  >{{ el.category.name }}</span
                >
              </div>
              <div class="product-badge-right red">
                <span
                  class="font-small uppercase font-family-secondary font-weight-medium"
                  >-50%</span
                >
              </div>
            </div>
            <div class="product-title">
              <h6 class="font-weight-medium">
                <a href="#">{{ el.title }}</a>
              </h6>
              <div class="price-and-cart">
                <div class="price">
                  <span>${{ el.price }}</span>
                </div>
                <div class="add-to-cart">
                  <a class="button-text-1" href="#">Add to Cart</a>
                </div>
              </div>
              <div class="add-to-wishlist">
                <a href="#"><i class="far fa-heart"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->
      <pagination :products="products" />
    </div>
    <!-- end container -->
  </div>
</template>
<script setup>
import Pagination from "@/components/AppPagination.vue";

import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores/products.store";
// import { useProductPaginationStore } from "@/stores/pagination.store";

const productsStore = useProductsStore();
// const paginationStore = useProductPaginationStore();
const { products } = storeToRefs(productsStore);

productsStore.getProducts();

</script>
