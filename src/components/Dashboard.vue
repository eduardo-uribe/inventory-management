<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Table from './Table.vue';

const router = useRouter();
const route = useRoute();

const tabledata = ref(null);
const loading = ref(true);
const error = ref(null);

const pageParam = route.query.page || 1;
const currentPage = ref(pageParam);
const numberOfPages = ref(2);

watch(() => route.query, fetchData, { immediate: true });

async function fetchData() {
  fetch(
    `https://inventory-management-1kaz.onrender.com/api/products?page=${currentPage.value}`
  )
    .then((res) => res.json())
    .then((json) => (tabledata.value = json))
    .catch((err) => (error.value = err))
    .finally(() => (loading.value = false));
}

function navigateToNextPage() {
  currentPage.value++;
  router.push({ query: { page: currentPage.value } });
}

function navigateToPreviousPage() {
  currentPage.value--;
  router.push({ query: { page: currentPage.value } });
}
</script>

<template>
  <section class="dashboard-page">
    <Table :tabledata="tabledata" :loading="loading" :error="error" />
    <nav class="pagination">
      <p>10 of 20 products</p>
      <p>
        Page: <b>{{ currentPage }}</b> of 10
      </p>
      <section class="pagination-buttons">
        <button
          class="pagination-buttons-button"
          @click="navigateToPreviousPage"
          :disabled="currentPage <= 1"
        >
          Previous
        </button>
        <button
          class="pagination-buttons-button"
          @click="navigateToNextPage"
          :disabled="currentPage >= numberOfPages"
        >
          Next
        </button>
      </section>
    </nav>
  </section>
</template>

<style scoped>
.dashboard-page {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.pagination {
  box-sizing: border-box;
  width: 85ch;
  display: flex;
  height: 40px;
  justify-content: space-between;
  margin-top: 1rem;
}

.pagination-buttons {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.pagination-buttons-button {
  width: 100px;
  height: 100%;
  margin: 0;
}
</style>
