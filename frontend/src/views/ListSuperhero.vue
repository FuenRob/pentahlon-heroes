<template>
  <div>
    <Header />
    <!-- Aquí puedes agregar la lista de superhéroes -->
    <h1 class="text-3xl font-bold mb-4">Listado de Superheroes</h1>
    <router-link to="/create" class="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Crear Superhéroe</router-link>
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="superhero in superheroes" :key="superhero._id">
          <td class="px-6 py-4 whitespace-nowrap">
            {{ superhero.name }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <router-link :to="`/edit/${superhero._id}`" class="text-indigo-600 hover:text-indigo-900">Editar</router-link>
            <button @click="deleteSuperhero(superhero._id)" class="text-red-600 hover:text-red-900 ml-4">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import axios from '../auth/axiosConfig';
import Header from '../components/Header.vue';

export default defineComponent({
  name: 'ListSuperhero',
  components: {
    Header
  },
  data() {
    return {
      superheroes: []
    };
  },
  async created() {
    await this.fetchSuperheroes();
  },
  methods: {
    async fetchSuperheroes() {
      try {
        const response = await axios.get('http://localhost:3000/api/superheroes');
        this.superheroes = response.data;
      } catch (error) {
        console.error('Error fetching superheroes:', error);
      }
    },
    async deleteSuperhero(id: number) {
      try {
        await axios.delete(`http://localhost:3000/api/superheroes/${id}`);
        await this.fetchSuperheroes();
      } catch (error) {
        console.error('Error deleting superhero:', error);
      }
    }
  }
});
</script>
  
<style scoped>
/* Estilos específicos para esta vista */
</style>
  