<script setup>
import { ref } from 'vue';

const tabledata = ref(null);
const loading = ref(true);
const error = ref(null);

fetch('https://inventory-management-1kaz.onrender.com/api/products')
  .then((res) => res.json())
  .then((json) => (tabledata.value = json))
  .catch((err) => (error.value = err))
  .finally(() => (loading.value = false));
</script>

<template>
  <table>
    <tr>
      <th>SKU</th>
      <th>Category</th>
      <th>Product</th>
      <th>Description</th>
      <th>Quantity</th>
    </tr>
    <div v-if="loading" class="loading">Loading...</div>
    <tr v-for="row in tabledata" :key="row.id">
      <td>{{ row.product_code }}</td>
      <td>{{ row.product_category }}</td>
      <td>{{ row.product_name }}</td>
      <td>{{ row.product_description }}</td>
      <td>{{ row.product_quantity }}</td>
    </tr>
  </table>
</template>

<style>
table,
th,
td {
  border: 1px solid;
}

table {
  border-collapse: collapse;
  height: min-content;
  margin-top: 5rem;
}

td {
  padding: 2px;
  text-indent: 8px;
}
</style>
