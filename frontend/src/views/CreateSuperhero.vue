<template>
  <div class="w-full max-w-xs">
    <Header />
    <h1 class="text-3xl font-bold mb-4">Crear heroe</h1>
    <form @submit.prevent="createSuperhero" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div>
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
        <input type="text" id="name" v-model="superhero.name" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div>
        <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Imagen (URL o Base64):</label>
        <input type="text" id="image" v-model="superhero.image" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div>
        <label for="agility" class="block text-gray-700 text-sm font-bold mb-2">Agilidad:</label>
        <input type="number" min="0" max="10" id="agility" v-model="superhero.attributes.agility" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div>
        <label for="strength" class="block text-gray-700 text-sm font-bold mb-2">Fuerza:</label>
        <input type="number" min="0" max="10" id="strength" v-model="superhero.attributes.strength" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div>
        <label for="weight" class="block text-gray-700 text-sm font-bold mb-2">Peso:</label>
        <input type="number" min="0" max="10" id="weight" v-model="superhero.attributes.weight" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div>
        <label for="endurance" class="block text-gray-700 text-sm font-bold mb-2">Resistencia:</label>
        <input type="number" min="0" max="10" id="endurance" v-model="superhero.attributes.endurance" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div>
        <label for="charisma" class="block text-gray-700 text-sm font-bold mb-2">Carisma:</label>
        <input type="number" min="0" max="10" id="charisma" v-model="superhero.attributes.charisma" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Crear</button>
    </form>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import axios from '../auth/axiosConfig';
import Header from '../components/Header.vue';

export default defineComponent({
  name: 'CreateSuperhero',
  components: {
    Header
  },
  data() {
    return {
      superhero: {
        name: '',
        image: '',
        attributes: {
          agility: 0,
          strength: 0,
          weight: 0,
          endurance: 0,
          charisma: 0
        }
      }
    };
  },
  methods: {
    async createSuperhero() {
      try {
        await axios.post('http://localhost:3000/api/superheroes', this.superhero);
        // Redireccionar a la página principal después de crear el superhéroe
        this.$router.push('/');
      } catch (error) {
        console.error('Error creating superhero:', error);
      }
    }
  }
});
</script>

<style scoped>
/* Estilos específicos para esta vista */
</style>
  