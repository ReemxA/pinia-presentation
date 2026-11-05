
<script setup>
import { useWatchlistStore } from '../stores/watchlist'

const store = useWatchlistStore()
</script>

<template>
  <section>
    <h3>Meine Watchlist</h3>

    <p v-if="store.movies.length === 0">
      Noch keine Filme gespeichert.
    </p>

    <div v-for="movie in store.movies" :key="movie.id"
         style="display:flex;justify-content:space-between;gap:12px;margin:12px 0">
      <span>{{ movie.title }}</span>

      <button @click="store.removeMovie(movie.id)">
        Entfernen
      </button>
    </div>
  </section>
</template>