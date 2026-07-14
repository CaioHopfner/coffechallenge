<script setup>
import { computed } from 'vue'
import cafes from '../data/product.js'
import CoffeeCard from '../components/CoffeeCard.vue'

const cafesOrdenados = computed(() => {
  return [...cafes]
    .map((cafe) => ({ ...cafe, nota: Number(cafe.nota) }))
    .sort((proximo, atual) => atual.nota - proximo.nota)
})
</script>

<template>
  <div class="ranking-container">
    <h2>Ranking de Cafés</h2>

    <ul class="ranking-list">
      <CoffeeCard
        v-for="(cafe, index) in cafesOrdenados"
        :key="cafe.id"
        :cafe="cafe"
        :position="index + 1"
        :show-details-button="true"
      />
    </ul>
  </div>
</template>

<style scoped>
.ranking-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ranking-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
