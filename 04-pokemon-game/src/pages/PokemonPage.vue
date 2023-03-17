<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>Quien es este pokemon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions
      :pokemons="pokemonArr"
      @clickAnswer="clickAnswer"
      :pokemon="pokemon"
    />

    <h2 :class="cssAlert">{{ answer }}</h2>
    
    <button v-if="answer" class="button" @click="mixinPokemons" >Reiniciar juego</button>
  </div>
</template>

<script >
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonPicture from "../components/PokemonPicture.vue";
import getPokemonOptions from "../helpers/getPokemonOptions";

export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr: [],
      showPokemon: false,
      pokemon: null,
      answer: "",
      cssAlert: "",
    };
  },
  methods: {
    async mixinPokemons() {

      this.pokemon = null;
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemonArr = await getPokemonOptions();

      this.pokemon = this.pokemonArr[rndInt];
      this.showPokemon = false;
      this.answer ="";

    },
    clickAnswer(id) {
      this.showPokemon = true;
      if (this.pokemon.id == id) {
        this.cssAlert = "green";
        this.answer = "Upaaa, Correcto!! es " + this.pokemon.name;
      } else {
        this.cssAlert = "red";
        this.answer = "Ohhh nooo, no es " + this.pokemon.name;
      }
    },
  },
  mounted() {
    this.mixinPokemons();
  },
};
</script>

<style scoped>
h1 {
  font-weight: bold !important;
}

.red {
    color: red !important;;
}

.green {
    color: green !important;;;
}

.button {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
  height: 40px;
  margin-left: 45px;
  font-weight: bold;
  
}

.button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>