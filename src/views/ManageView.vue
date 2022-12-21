<template>
  <div class="section">
    <div class="container">
      <div class="margin-bottom-40">
        <div class="row col-spacing-40">
          <h5 class="font-weight-normal margin-bottom-30">Product details</h5>
          <vee-form :validation-schema="addSchema" @submit="add">
            <div class="input-control">
              <label for="title" class="required">Product Name</label>
              <vee-field
                v-model="title"
                name="title"
                id="title"
                class="input-field"
                placeholder="Product name"
              />
              <ErrorMessage class="input-error" name="title" />
            </div>
            <div class="input-control">
              <label for="price" class="required">Price</label>
              <vee-field
                v-model="price"
                type="number"
                name="price"
                id="price"
                class="input-field"
              />
              <ErrorMessage class="input-error" name="price" />
            </div>
            <div class="input-control">
              <label for="title" class="required">Description</label>
              <vee-field
                v-model="description"
                as="textarea"
                name="description"
                id="description"
                class="input-field"
                placeholder="Description here..."
              />
              <ErrorMessage class="input-error" name="description" />
            </div>
            <div class="input-control">
              <label for="title" class="required">Category</label>
              <vee-field
                as="select"
                name="categoryId"
                class="custom-select w-100"
              >
                <option
                  v-for="category in categories"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.name }}
                </option>
              </vee-field>
              <ErrorMessage class="input-error" name="categoryId" />
            </div>
            <label for="image" class="required">Image url</label>
            <div
              v-for="(image, index) in images"
              :key="index"
              class="input-control"
            >
              <vee-field
                v-model="image.url"
                type="url"
                :name="'images[' + index + ']'"
                class="input-field"
                placeholder="Image url"
              />
              <button
                v-if="images.length > 1"
                class="input-field__remove"
                @click="deleteImage(index)"
              >
                <i class="fa-sharp fa-solid fa-xmark"></i>
              </button>
              <!--              <ErrorMessage-->
              <!--                class="input-error"-->
              <!--                :name="'images[' + index + ']'"-->
              <!--              />-->
            </div>
            <button
              @click.prevent="addImage"
              class="button button-md button-dark margin-top-20t margin-bottom-10"
            >
              Add another image
            </button>
            <div class="form__submit">
              <button
                type="submit"
                name="submit"
                class="button button-md button-dark margin-top-20t"
              >
                Add
              </button>
            </div>
          </vee-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "@/stores/products.store";
import { router } from "@/router/index";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

export default {
  name: "Manage",
  setup() {
    const productsStore = useProductsStore();
    const { categories } = storeToRefs(productsStore);

    onMounted(() => {
      productsStore.getCategories();
    });
    console.log(categories)
    return { categories };
  },
  data() {
    return {
      title: "",
      description: "",
      price: 0,
      images: [
        {
          url: "",
        },
      ],
      addSchema: {
        title: "required|min:3|max:64",
        price: "required|min_value:1|numeric",
        categoryId: "required",
        // images: "required|url",
      },
    };
  },
  methods: {
    addImage: function () {
      this.images.push({ url: "" });
    },
    deleteImage: function (id) {
      this.images.splice(id, 1);
    },
    async add(values) {
      const productsStore = useProductsStore();
      await productsStore.addProduct(values);
      await router.push("/home");
    },
  },
};
</script>
<style lang="scss" scoped>
.input-field__remove {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 11px;
  color: #767a7d;
}
</style>
