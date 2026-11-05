<script setup>
import { useWatchlistStore } from '../stores/watchlist'

const store = useWatchlistStore()
</script>

<template>
  <div>
    <h3>Gespeicherte Filme: {{ store.movieCount }}</h3>
  </div>
</template>