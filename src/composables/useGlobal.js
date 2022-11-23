import { reactive, toRefs } from "vue";

const store = reactive({
  loading: true,
});

export default function useGlobal() {
  return {
    ...toRefs(store),
  };
}
