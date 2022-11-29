import { defineStore } from "pinia";
import { useAuthStore } from "@/stores/auth.store";
import { useProductPaginationStore } from "@/stores/pagination.store";

const auth = useAuthStore();
const paginationStore = useProductPaginationStore();

export const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    products: [],
  }),
  actions: {
    getProducts() {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.user?.access_token}`,
      };
      fetch(
        `https://api.escuelajs.co/api/v1/products?limit=${paginationStore.pagination.limit}&offset=${paginationStore.pagination.offset}`,
        {
          headers,
        }
      ).then(async (response) => {
        this.products = await response.json();
        // console.log(this.products);
      });
    },
  },
});
