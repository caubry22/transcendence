<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <nav>
    <RouterLink to="/">Connexion</RouterLink>
    <RouterLink to="/profil">Profil</RouterLink>
    <RouterLink to="/chat">Chat</RouterLink>
    <RouterLink to="/pong">Pong</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
</style>
