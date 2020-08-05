<template>
  <div class="container" id="app">
    <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between">
        <router-link to="/" class="p-2 text-muted">Home</router-link>
    
        <router-link to="/clientes" class="p-2 text-muted">Clientes</router-link>
         <router-link to="/sobre" class="p-2 text-muted" >Sobre</router-link>
         <router-link to="/" class="p-2 text-muted">Torne-se um Programador</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>




