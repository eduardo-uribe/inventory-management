<script setup></script>

<template>
  <nav>
    <h1 class="logo">
      <RouterLink class="logo-link" to="/"
        >Fleet Inventory Management
      </RouterLink>
    </h1>

    <ul class="navigation-links">
      <li><RouterLink to="/pricing">Pricing</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
      <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
    </ul>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  border-bottom: solid 1px #eee;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.navigation-links {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.logo {
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
}

.logo-link {
  color: #333;
  text-decoration: none;
}
</style>
