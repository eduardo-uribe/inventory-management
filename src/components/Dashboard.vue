<script setup>
import { ref } from 'vue';
import Table from './Table.vue';
</script>

<template>
  <section class="dashboard-page">
    <Table />
  </section>
</template>

<style scoped>
.dashboard-page {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

table {
  border: solid 1px #eee;
  margin-top: 5rem;
  width: 85ch;
  height: max-content;
}
</style>
