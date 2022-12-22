import { defineStore } from "pinia";
import { useAuthStore } from "@/stores/auth.store";
import { useProductPaginationStore } from "@/stores/pagination.store";
import { useAlertStore } from "@/stores/alert.store";

const auth = useAuthStore();
const paginationStore = useProductPaginationStore();

export const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    products: [],
    categories: [],
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
    getCategories() {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.user?.access_token}`,
      };
      fetch(`https://api.escuelajs.co/api/v1/categories?limit=5`, {
        headers,
      }).then(async (response) => {
        this.categories = await response.json();
      });
    },
    async addProduct(product) {
      const alertStore = useAlertStore();
      await fetch(`https://api.escuelajs.co/api/v1/products`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.user?.access_token}`,
        },
        body: JSON.stringify(product),
      })
        .then(async (response) => {
          const data = await response.json();
          if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          } else {
            alertStore.success("Product was added.");
          }
        })
        .catch((error) => {
          alertStore.error(error.join());
        });
    },
    async removeProduct(id) {
      console.log("test", id);
      const alertStore = useAlertStore();
      await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.user?.access_token}`,
        },
      })
        .then(async (response) => {
          const data = await response.json();
          if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          } else {
            alertStore.success("Product was removed.");
          }
        })
        .catch((error) => {
          alertStore.error(error.join());
        });
    },
  },
});
