<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <div class="brand">
    <RouterLink to="/" class="brand-link">
      <span class="brand-text">thecoffechallenge</span>
    </RouterLink>
  </div>

  <nav class="nav-links" aria-label="Navegação principal">
    <RouterLink to="/" class="nav-link" exact-active-class="active">Início</RouterLink>
    <RouterLink to="/avaliacoes" class="nav-link" active-class="active">Avaliações</RouterLink>
    <RouterLink to="/ranking" class="nav-link" active-class="active">Ranking</RouterLink>
    <RouterLink to="/cafe" class="nav-link" active-class="active">Cafés</RouterLink>
  </nav>
</template>

<style>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #ffe3e3;
  border-bottom: 1px solid #e7d8c4;
}

.brand-link,
.nav-link {
  text-decoration: none;
  color: #771212;
}

.brand-link {
  font-weight: 700;
  font-size: 1.1rem;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.nav-link {
  padding: 0.6rem 0.9rem;
  border-radius: 999px;
}

.nav-link:hover,
.nav-link:focus-visible {
  background: #f0e1cf;
}

.nav-link.active {
  text-decoration: underline;
  text-underline-offset: 7px;
}
</style>
