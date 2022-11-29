<template>
  <div class="header header-lg border-bottom">
    <div class="container">
      <div class="logo">
        <h4 class="uppercase letter-spacing-2"><a href="#">Shop</a></h4>
      </div>
      <div class="header-menu-wrapper">
        <!-- Menu -->
        <ul class="header-menu">
          <li class="m-item">
            <a class="m-link" href="#">Basic</a>
          </li>
          <li class="m-item">
            <a
              v-show="authStore.user"
              class="m-link"
              href="#"
              @click="authStore.logout()"
            >
              Logout</a
            >
          </li>
        </ul>
        <!-- Extra -->
        <div class="header-menu-extra">
          <ul class="list-inline">
            <li>
              <a href="#"><i class="fas fa-heart"></i></a>
            </li>
            <li>
              <a href="#"><i class="fas fa-shopping-cart"></i></a>
            </li>
          </ul>
        </div>
        <!-- Close Button -->
        <button class="close-button">
          <span></span>
        </button>
      </div>
      <!-- end header-menu-wrapper -->
      <!-- Menu Toggle on Mobile -->
      <button class="m-toggle">
        <span></span>
      </button>
    </div>
    <!-- end container -->
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth.store";

const authStore = useAuthStore();
</script>
