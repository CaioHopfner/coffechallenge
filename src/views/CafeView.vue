<script setup>
import cafes from '../data/product.js'


</script>

<template>
  <main>
    <h1>Cafés Participantes</h1>

    <ul class="cafes">
      <li v-for="cafe in cafes" :key="cafe.id">
        <div class="textos">
          <img src="https://cdn-icons-png.flaticon.com/512/766/766407.png" :alt="cafe.nome" />
          <div>
          <h2>{{ cafe.nome }}</h2>
          <p>Origem: {{ cafe.origem }}</p>
          <p>Nota: {{ cafe.nota }}</p>
          </div>

        </div>
        <div>
          <button>
            Avaliar
          </button>
        </div>
      </li>
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

  .cafes li {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #fcd2d2;
    border-radius: 8px;
    background: #fffaf7;
    justify-content: space-between;
  }

  .cafes img {
    width: 72px;
    height: auto;
    display: block;
    background-color: #ffd6d6;
    border-radius: 10px;
    padding: 0.3vw;
  }
  div.textos {
    display: flex;
    align-items: center;
  }
  .textos div {
    text-align: left;
    margin-left: 1vw;
  }
  .textos h2 {
    font-weight: 1.5rem;
    font-weight: 600;
    margin-bottom: 1vw;
  }

  .cafes button {
    background: #771212;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 0.6rem 1rem;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .cafes button:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

</style>
