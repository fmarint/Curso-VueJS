<script setup>
import Counter from './components/Counter.vue';
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      <Counter :start="15" title="Contador" />
  </header>
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
