<script setup>
import { ref } from 'vue';

defineProps(['tabledata', 'loading', 'error']);
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
  border: solid 1px #eee;
  width: 85ch;
  border-collapse: collapse;
  height: min-content;
  margin-top: 5rem;
}

td {
  padding: 2px;
  text-indent: 8px;
}
</style>
