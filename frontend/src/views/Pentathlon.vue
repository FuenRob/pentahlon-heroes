<template>
    <div>
        <Header />
        <h1 class="text-3xl font-bold mb-4">Pentatlón</h1>
        <div class="mb-4">
            <label for="hero1" class="mr-2">Superhéroe 1:</label>
            <select id="hero1" v-model="selectedHeroes[0]" class="p-2 border border-gray-300 rounded">
                <option v-for="hero in heroes" :key="hero._id" :value="hero._id">{{ hero.name }}</option>
            </select>
        </div>
        <div class="mb-4">
            <label for="hero2" class="mr-2">Superhéroe 2:</label>
            <select id="hero2" v-model="selectedHeroes[1]" class="p-2 border border-gray-300 rounded">
                <option v-for="hero in heroes" :key="hero._id" :value="hero._id">{{ hero.name }}</option>
            </select>
        </div>
        <div class="mb-4">
            <label for="hero3" class="mr-2">Superhéroe 3:</label>
            <select id="hero3" v-model="selectedHeroes[2]" class="p-2 border border-gray-300 rounded">
                <option v-for="hero in heroes" :key="hero._id" :value="hero._id">{{ hero.name }}</option>
            </select>
        </div>
        <button @click="startCompetition" class="px-4 py-2 bg-blue-500 text-white rounded">Iniciar competición</button>
        <h2 class="text-2xl font-bold mt-4">Clasificación final</h2>
        <div v-for="result in finalResults" :key="result.heroId" class="flex items-center mb-2">
            <img :src="getHeroImage(result.heroId)" alt="Hero Image" width="120" height="120" class="mr-4">
            <p>
                <span>{{ getHeroName(result.heroId) }} - {{ result.points }} puntos</span>
            </p>
        </div>
    </div>
</template>

<script>
import axios from '../auth/axiosConfig';
import Header from '../components/Header.vue';

export default {
    name: 'Pentathlon',
    components: {
        Header
    },
    data() {
        return {
            heroes: [],
            selectedHeroes: [],
            finalResults: []
        };
    },
    async created() {
      await this.fetchSuperheroes();
    },
    methods: {
        async fetchSuperheroes() {
            try {
                const response = await axios.get('http://localhost:3000/api/superheroes');
                this.heroes = response.data;
            } catch (error) {
                console.error('Error fetching superheroes:', error);
            }
        },
        startCompetition() {
            const results = [];
            
            for (let i = 0; i < this.selectedHeroes.length; i++) {
                const heroId = this.selectedHeroes[i];
                const hero = this.heroes.find(hero => hero._id === heroId);
                
                const climbSkyscraper = (hero.strength * 4) - (hero.weight * 2);
                const tellJoke = (hero.charisma ** 2) - this.calculateOpponentsCharismaSum(heroId);
                const shootVillain = (hero.agility + hero.strength) + (i === this.selectedHeroes.length - 1 ? 5 : 0);
                const run200Km = (hero.agility * 4) + (hero.endurance * 2) + (i === 0 ? 10 : -1);
                const rescueKittens = (hero.agility * 2) + (this.calculatePrizePoints() >= 2 ? 5 : 0);
                
                const totalPoints = climbSkyscraper + tellJoke + shootVillain + run200Km + rescueKittens;
                
                results.push({ heroId, points: totalPoints });
            }
            
            results.sort((a, b) => b.points - a.points);
            
            this.finalResults = results.map((result, index) => {
                let points = 0;
                if (index === 0) {
                    points = 5;
                } else if (index === 1) {
                    points = 3;
                } else if (index === 2) {
                    points = 1;
                }
                return { heroId: result.heroId, points };
            });
        },
        calculateOpponentsCharismaSum(heroId) {
            let sum = 0;
            for (let i = 0; i < this.selectedHeroes.length; i++) {
                if (this.selectedHeroes[i] !== heroId) {
                    const hero = this.heroes.find(hero => hero._id === this.selectedHeroes[i]);
                    sum += hero.charisma;
                }
            }
            return sum;
        },
        calculatePrizePoints() {
            let count = 0;
            for (let i = 0; i < this.finalResults.length; i++) {
                if (this.finalResults[i].points >= 5) {
                    count++;
                }
            }
            return count;
        },
        getHeroName(heroId) {
            const hero = this.heroes.find(hero => hero._id === heroId);
            return hero.name;
        },
        getHeroImage(heroId) {
            const hero = this.heroes.find(hero => hero._id === heroId);
            return hero.image;
        }
    }
};
</script>