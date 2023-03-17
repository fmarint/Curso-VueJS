<template>
  <div class="pokemon-container">
    <img
      v-if="!showPokemon"
      :src="imgUrl"
      alt="img"
      class="hidden-pokemon"
    />
    <img v-if="showPokemon" :src="imgUrl" alt="img" class="fade-in" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    imgUrl() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  
}
.hidden-pokemon {
  -webkit-filter: contrast(0%) brightness(30%);

  filter: contrast(0%) brightness(30%);
  /* -webkit-filter: contrast(100%) sepia(100%) hue-rotate(20deg) saturate(2500%)
    brightness(100%);

  filter: contrast(0) sepia(100%) hue-rotate(20deg) saturate(2500%)
    brightness(100%); */
  opacity: 1;

  /* filter: brightness(0); */
}

.fade-in {
    animation: fadeIn 0.3s;
    -webkit-animation: fadeIn 0.3s;
    -moz-animation: fadeIn 0.3s;
    -o-animation: fadeIn 0.3s;
    -ms-animation: fadeIn 0.3s;
  }
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

</style>