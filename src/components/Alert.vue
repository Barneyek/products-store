<script setup>
import { storeToRefs } from "pinia";

import { useAlertStore } from "@/stores/alert.store";

const alertStore = useAlertStore();
const { alert } = storeToRefs(alertStore);
</script>

<template>
  <div v-if="alert" >
    <div class="m-3">
      <div class="alert alert-dismissable" :class="alert.type">
        <button @click="alertStore.clear()" class="btn btn-link close">
          ×
        </button>
        {{ alert.message }}
      </div>
    </div>
  </div>
</template>
