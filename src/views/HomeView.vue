<script setup>
import { ref } from 'vue';
import cafes from '@/data/product';
const qtdParticipantes = ref(cafes.length)
const qtdAvaliacoes = ref(2)
</script>

<template>
  <main>
    <section class="topo">
    <h1>Campeanato de avaliaçao de cafés</h1>
    <h2>Avaliação Sensorial de Cafés Especiais</h2>
    </section>
    <section class="homeP">
      <ul>
        <li class="stat-item">
          <img class="stat-icon" src="https://images.vexels.com/media/users/3/157512/isolated/preview/d737a872708b488d89d0341ac9b8bc5a-pessoas-contatam-pessoas-icone.png" alt="Ícone de pessoas">
          <div class="stat-text">
            <h3>Cafés Participantes</h3>
            <p>{{ qtdParticipantes }}</p>
          </div>
        </li>
        <li class="stat-item">
          <img src="https://images.icon-icons.com/1744/PNG/512/3643781-check-checklist-complete-done-mark_113406.png" alt="Checklist" class="stat-icon">
          <div class="stat-text">
            <h3>Avaliações Registradas</h3>
            <p>{{ qtdAvaliacoes }}</p>
          </div>
        </li>
      </ul>
      <button>Ver Avaliaçoes</button>
    </section>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  text-align: center;
  margin: 0;
  box-sizing: border-box;
}

section.topo {
  background-color: #fff4f4;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 1vw;
  display: block;
  padding: 2vw;
  border-radius: 5px;
  border: 1px solid #fcd2d2;
  color: #20140e;
}
.topo h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2vw;
  text-decoration: underline;
  text-underline-offset: 1vw;
  text-decoration-color: rgb(247, 226, 200);
}
.topo h2 {
  font-size: 1.1rem;
}
.homeP {
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
}
.homeP ul {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 3vw;
  flex-wrap: wrap;
}
.homeP ul li {
  padding: 1.25rem;
  border: 1px solid #fcd2d2;
  border-radius: 5px;
  flex: 1 1 220px;
  min-width: 220px;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
}
.stat-icon {
  width: min(72px, 18vw);
  max-width: 72px;
  height: auto;
  flex-shrink: 0;
  object-fit: contain;
  display: block;
}
.stat-text {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.homeP h3 {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
}
.homeP p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4b2e1f;
  margin: 0;
}

@media (max-width: 600px) {
  .homeP ul {
    flex-direction: column;
  }

  .homeP ul li {
    width: 100%;
    min-width: 0;
  }

  .stat-icon {
    width: 48px;
  }
}
.homeP button {
  background-color: #771212;
  border: none;
  color: white;
  font-weight: 500;
  padding: 0.3vw 5vw;
  width: 100%;
  font-size: 1.1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.homeP button:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
