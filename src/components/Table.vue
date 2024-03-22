<script setup>
import { defineProps, ref } from 'vue';
// const props = defineProps(['tabledata']);

const tabledata = ref(null);
const error = ref(null);

fetch('http://localhost:8080/api/products')
  .then((res) => res.json())
  .then((json) => (tabledata.value = json))
  .catch((err) => (error.value = err));
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
}

td {
  padding: 2px;
  text-indent: 8px;
}
</style>
