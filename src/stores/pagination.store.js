import { defineStore } from "pinia";

export const useProductPaginationStore = defineStore("productPagination", {
  state: () => ({
    pagination: {
      offset: 1,
      limit: 10,
      page: 1,
      rowsNumber: false,
    },
  }),
});
