<script setup>
import cafes from '../data/product.js'
import { computed } from 'vue'

const cafesOrdenados = computed(() => {
  const cafesComNotaNumerica = []

  for (const cafe of cafes) {
    cafesComNotaNumerica.push({
      ...cafe,
      nota: Number(cafe.nota)
    })
  }

  return cafesComNotaNumerica.sort((proximo, atual) => atual.nota - proximo.nota)
})
</script>

<template>
  <div class="ranking-container">
    <h2>Ranking de Cafés</h2>

    <ul>
      <li v-for="cafe in cafesOrdenados" :key="cafe.id">
        <span class="nome">{{ cafe.nome }}</span>
        <span class="nota">{{ cafe.nota.toFixed(1) }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.ranking-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1rem;
  border: 1px solid #f2d5c4;
  border-radius: 8px;
  background: #fffaf7;
}

.nome {
  font-weight: 600;
}

.nota {
  color: #771212;
  font-weight: 700;
}
</style>
