<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['salvar'])

const cafeSelecionado = ref(null)
const formulario = ref({
  aroma: 0,
  docura: 0,
  acidez: 0,
  corpo: 0,
  finalizacao: 0,
})

const mediaCalculada = computed(() => {
  const f = formulario.value
  const totalCampos = 5
  const soma =
    (f.aroma || 0) + (f.docura || 0) + (f.acidez || 0) + (f.corpo || 0) + (f.finalizacao || 0)

  return (soma / totalCampos).toFixed(1)
})

function salvar() {
  if (!cafeSelecionado.value) {
    alert('Por favor, selecione um café')
    return
  }

  cafeSelecionado.value.nota = mediaCalculada.value
  emit('salvar', {
    cafe: cafeSelecionado.value,
    nota: mediaCalculada.value,
  })
}
</script>

<template>
  <section class="forms">
    <form @submit.prevent="salvar">
      <div>
        <label for="cafe-select">Café</label>
        <select id="cafe-select" v-model="cafeSelecionado">
          <option :value="null" disabled>Selecione um café...</option>
          <option v-for="cafe in cafes" :key="cafe.id" :value="cafe">
            {{ cafe.nome }}
          </option>
        </select>
      </div>

      <ul class="lista-dupla">
        <li>
          <label for="aroma">Aroma</label>
          <input id="aroma" type="number" v-model.number="formulario.aroma" min="0" max="10" />
        </li>
        <li>
          <label for="docura">Doçura</label>
          <input id="docura" type="number" v-model.number="formulario.docura" min="0" max="10" />
        </li>
        <li>
          <label for="acidez">Acidez</label>
          <input id="acidez" type="number" v-model.number="formulario.acidez" min="0" max="10" />
        </li>
        <li>
          <label for="corpo">Corpo</label>
          <input id="corpo" type="number" v-model.number="formulario.corpo" min="0" max="10" />
        </li>
        <li>
          <label for="finalizacao">Finalização</label>
          <input
            id="finalizacao"
            type="number"
            v-model.number="formulario.finalizacao"
            min="0"
            max="10"
          />
        </li>
        <li class="especial">
          <p>{{ mediaCalculada }}</p>
        </li>
      </ul>

      <button type="submit">Salvar</button>
    </form>
  </section>
</template>

<style scoped>
select {
  padding: 12px;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #fff;
  width: 100%;
}

label {
  font-size: 1.1rem;
  font-weight: 570;
}

.lista-dupla {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.lista-dupla li {
  flex: 0 0 calc(50% - 0.5rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  background: #fffaf7;
}

.lista-dupla input {
  width: 60px;
  padding: 8px;
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  font-size: 1rem;
}

.lista-dupla p {
  font-size: 1.5rem;
  font-weight: 620;
  color: white;
}

li.especial {
  background-color: #771212;
}

@media (max-width: 600px) {
  .lista-dupla li {
    flex: 0 0 100%;
  }
}

button {
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  margin-top: 1.5rem;
  background-color: #6b4423;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

button:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
