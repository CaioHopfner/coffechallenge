<script setup>
import { RouterView } from 'vue-router'
import HeaderView from './components/layout/HeaderView.vue';
</script>

<template>
  <header class="topbar">
    <HeaderView />
  </header>

  <main class="page-content">
    <RouterView />
  </main>
</template>

<style scoped>
:global(body) {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  background: #fffaf7;
  color: #20140e;
}

.page-content {
  width: 100%;
  padding: 1.2rem;
  box-sizing: border-box;
}

.page-content > * {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

</style>
