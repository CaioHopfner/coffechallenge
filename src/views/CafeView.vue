<script setup>
import cafes from '../data/product.js'
import CoffeeCard from '../components/CoffeeCard.vue'
</script>

<template>
  <main>
    <h1>Cafés Participantes</h1>

    <ul class="cafes">
      <CoffeeCard v-for="cafe in cafes" :key="cafe.id" :cafe="cafe">
        <template #actions>
          <router-link to="/avaliacoes">
            <button>Avaliar</button>
          </router-link>
        </template>
      </CoffeeCard>
    </ul>
  </main>
</template>

<style scoped>
h1 {
  text-align: left;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.cafes {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
