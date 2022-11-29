import { ref, computed } from "vue";
import { useProductsStore } from "@/stores/products.store";
import { storeToRefs } from "pinia";

export default function handlePagination() {
  let page = ref(1);
  const productsStore = useProductsStore();
  const { products } = storeToRefs(productsStore);
  const perPage = 10;
 // products.forEach(el =>  console.log(el))
 //  console.log(products.value)
  const paginatedData = computed(() =>
    products.slice((page.value - 1) * perPage, page.value * perPage)
  );


  const nextPage = () => {
    // if (page.value !== Math.ceil(products.length / perPage)) {
    //   page.value += 1;
    // }
  };

  const backPage = () => {
    if (page.value !== 1) {
      page.value -= 1;
    }
  };

  const goToPage = (numPage) => {
    page.value = numPage;
  };

  return { paginatedData, perPage, page, nextPage, backPage, goToPage };
}
