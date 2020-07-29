<template>
  <div class="container" id="app">
  <div class="nav-scroller py-1 mb-2">
    <nav class="nav d-flex justify-content-between">
      <a class="p-2 text-muted" href="#">Home</a>
      <a class="p-2 text-muted" href="#">Torne-se um Programador</a>
      
    </nav>
  </div>
    <Clientes msg="Olá bem vindo a uma aula do torne-se um programador"/>
  </div>
</template>

<script>
import Clientes from './components/Clientes.vue'

export default {
  name: 'App',
  components: {
    Clientes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
