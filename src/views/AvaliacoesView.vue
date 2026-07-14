<script setup>
import cafes from '@/data/product'
import AvaliacaoForm from '@/components/AvaliacaoForm.vue'

function onSalvar({ cafe, nota }) {
  alert(`Avaliação salva: ${cafe.nome} - Nota: ${nota}`)
}
</script>

<template>
  <main>
    <h1>Nova Avaliaçao</h1>
    <AvaliacaoForm :cafes="cafes" @salvar="onSalvar" />
  </main>
</template>

<style scoped>
h1 {
  text-align: left;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
