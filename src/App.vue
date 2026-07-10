<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/avaliacoes">Avaliações</RouterLink>
        <RouterLink to="/ranking">Ranking</RouterLink>
        <RouterLink to="/formulario">Formulário</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
