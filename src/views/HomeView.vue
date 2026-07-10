<script setup>

</script>

<template>
  <main>
    <section class="topo">
    <h1>THE COFFE QUALITY CHALLENGE</h1>
    <h2>Avaliação Sensorial de Cafés Especiais</h2>
    </section>
    <section>
      <ul>
        <li>
          <h3>Cafés Participantes:</h3>
          <p>{{ qtdParticipantes }}</p>
        </li>
        <li>
          <h3>Avaliações Registradas:</h3>
          <p>{{ qtdAvaliacoes }}</p>
        </li>
      </ul>
      <button>Ver Cafés</button>
    </section>
  </main>
</template>

<style>

main {
  text-align: center;
}

</style>
