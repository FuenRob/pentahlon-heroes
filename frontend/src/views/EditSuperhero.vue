<template>
  <div>
    <Header />
    <h1 class="text-3xl font-bold mb-4">Editar heroe</h1>
    <form @submit.prevent="updateSuperhero" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
      <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../components/Header.vue';

export default {
  name: 'EditSuperhero',
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
  mounted() {
    this.fetchSuperhero();
  },
  methods: {
    fetchSuperhero() {
      const id = this.$route.params.id;
      axios.get(`http://localhost:3000/api/superheroes/${id}`)
        .then(response => {
          this.superhero = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateSuperhero() {
      const id = this.$route.params.id; // Replace with the actual superhero ID
      axios.put(`http://localhost:3000/api/superheroes/${id}`, this.superhero)
        .then(response => {
          console.log('Superhero updated successfully');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>