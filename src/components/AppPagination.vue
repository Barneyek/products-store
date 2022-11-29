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
          <div class="page-link">{{ numPages }}</div>
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
    const { products, pageSize } = toRefs(props);
    let currentIndex = ref(0);

    const totalPages = computed(() => products.value.length);
    const currentPage = computed(() => currentIndex.value + 1);
    const numPages = computed(() =>
      Math.ceil(totalPages.value / pageSize.value)
    );
    const range = computed(() =>
      products.value.slice(
        currentIndex.value * pageSize.value,
        (currentIndex.value + 1) * pageSize.value
      )
    );
    const gotoNext = () => {
      console.log(range)
      currentIndex.value = Math.min(currentIndex.value + 1, numPages.value - 1);
    };
    const gotoPrev = () => {
      currentIndex.value = Math.max(0, currentIndex.value - 1);
    };

    return {
      currentIndex,
      currentPage,
      totalPages,
      numPages,
      range,
      gotoNext,
      gotoPrev,
    };
  },
};
</script>
