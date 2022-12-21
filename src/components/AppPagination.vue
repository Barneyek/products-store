<template>
  <div class="text-center margin-top-70">
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <button @click="gotoPrev" class="page-link">«</button>
        </li>
        <li class="page-item active">
          <button class="page-link">{{ currentPage }}</button>
        </li>
        <li class="page-item"><button class="page-link">...</button></li>
        <li class="page-item">
          <div class="page-link"></div>
        </li>
        <!--        <li-->
        <!--          v-for="item in Math.ceil(data.length / perPage)"-->
        <!--          :key="item"-->
        <!--          @click="() => goToPage(item)"-->
        <!--          class="page-item"-->
        <!--        >-->
        <!--          <a class="page-link" href="#"> {{ item }} </a>-->
        <!--        </li>-->
        <li class="page-item">
          <a @click="gotoNext" class="page-link">»</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref, toRefs, computed } from "vue";

export default {
  name: "AppPagination",
  props: ["products", "pageSize"],
  setup(props) {
    const { products } = toRefs(props);
    let currentIndex = ref(0);
    const totalPages = computed(() => products.value.length);
    const currentPage = computed(() => currentIndex.value + 1);
    const rowsPerPage = ref(10);

    const paginatedArray = computed(() =>
      products.value.slice(
        (currentPage.value - 1) * rowsPerPage.value,
        currentPage.value * rowsPerPage.value
      )
    );
    const numberOfPages = computed(() =>
      Math.ceil((paginatedArray.value.length || 0) / rowsPerPage.value)
    );

    return {
      currentIndex,
      currentPage,
      totalPages,
      paginatedArray,
      numberOfPages,

    };
  },
};
</script>
