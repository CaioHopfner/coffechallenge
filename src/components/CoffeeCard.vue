<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  cafe: {
    type: Object,
    required: true,
  },
  position: {
    type: Number,
    default: 0,
  },
  showDetailsButton: {
    type: Boolean,
    default: false,
  },
})

const expanded = ref(false)

const notas = computed(() => [
  { label: 'Aroma', value: props.cafe?.avaliacao?.aroma ?? '—' },
  { label: 'Doçura', value: props.cafe?.avaliacao?.docura ?? '—' },
  { label: 'Acidez', value: props.cafe?.avaliacao?.acidez ?? '—' },
  { label: 'Corpo', value: props.cafe?.avaliacao?.corpo ?? '—' },
  { label: 'Finalização', value: props.cafe?.avaliacao?.finalizacao ?? '—' },
])
</script>

<template>
  <li class="coffee-card">
    <div class="summary">
      <img src="https://cdn-icons-png.flaticon.com/512/766/766407.png" :alt="cafe.nome" />
      <div class="info">
        <h2>{{ cafe.nome }}</h2>
        <p class="origin">Origem: {{ cafe.origem }}</p>
        <p class="rating">Média: {{ Number(cafe.nota ?? 0).toFixed(1) }}</p>
      </div>
    </div>

    <div class="actions">
      <slot name="actions" />
      <button v-if="showDetailsButton" class="details-btn" @click="expanded = !expanded">
        {{ expanded ? 'Ocultar detalhes' : 'Ver detalhes' }}
      </button>
    </div>

    <div v-if="expanded" class="details">
      <p><strong>Nome:</strong> {{ cafe.nome }}</p>
      <p><strong>Origem:</strong> {{ cafe.origem }}</p>
      <div class="notes">
        <p v-for="nota in notas" :key="nota.label">
          <span>{{ nota.label }}:</span> {{ nota.value }}
        </p>
      </div>
      <div class="footer">
        <span>Média: {{ Number(cafe.nota ?? 0).toFixed(1) }}</span>
        <span>Colocação: #{{ position || '—' }}</span>
      </div>
    </div>
  </li>
</template>

<style scoped>
.coffee-card {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1rem;
  border: 1px solid #fcd2d2;
  border-radius: 8px;
  background: #fffaf7;
}

.summary {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.summary img {
  width: 72px;
  height: auto;
  display: block;
  background-color: #ffd6d6;
  border-radius: 10px;
  padding: 0.3rem;
}

.info {
  text-align: left;
}

.info h2 {
  margin: 0 0 0.3rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.origin,
.rating {
  margin: 0;
  color: #6b4423;
}

.actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
}

.details-btn,
.actions button {
  background: #771212;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1rem;
  cursor: pointer;
}

.details {
  border-top: 1px solid #f2d5c4;
  padding-top: 0.8rem;
  display: grid;
  gap: 0.5rem;
}

.notes {
  display: grid;
  gap: 0.35rem;
}

.notes p,
.footer {
  margin: 0;
}

.footer {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: #771212;
}
</style>
