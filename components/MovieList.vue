<script setup>
import { useWatchlistStore } from '../stores/watchlist'

const store = useWatchlistStore()

const movies = [
  { id: 1, title: 'Interstellar', year: 2014 },
  { id: 2, title: 'Inception', year: 2010 },
  { id: 3, title: 'The Dark Knight', year: 2008 },
  { id: 4, title: 'Spirited Away', year: 2001 }
]
</script>

<template>
  <section>
    <h3>Filmübersicht</h3>

    <div v-for="movie in movies" :key="movie.id"
         style="display:flex;justify-content:space-between;gap:12px;margin:12px 0">
      <span>{{ movie.title }} ({{ movie.year }})</span>

      <button
          :disabled="store.movies.some(m => m.id === movie.id)"
          @click="store.addMovie(movie)"
      >
        Hinzufügen
      </button>
    </div>
  </section>
</template>