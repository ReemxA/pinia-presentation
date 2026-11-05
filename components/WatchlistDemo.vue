<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'

import MovieList from './MovieList.vue'
import Watchlist from './Watchlist.vue'
import WatchlistCounter from './WatchlistCounter.vue'
import { useWatchlistStore } from '../stores/watchlist'

const store = useWatchlistStore()

// State und Getter als reaktive Referenzen
const { loading, movieCount } = storeToRefs(store)

// Formatiert den aktuellen Pinia-State als JSON
const stateJson = computed(() =>
    JSON.stringify(store.$state, null, 2)
)

// Steuert die Sichtbarkeit des Inspectors
const showInspector = ref(true)
</script>

<template>
  <div class="demo">

    <h2>Pick My Movie – Pinia Demo</h2>

    <WatchlistCounter />

    <div class="demo-grid">

      <!-- Komponente 1: Filmübersicht -->
      <div class="panel">
        <MovieList />
      </div>

      <!-- Komponente 2: Watchlist -->
      <div class="panel">
        <Watchlist />
      </div>

      <!-- Live-Store-Inspector -->
      <div class="inspector">

        <div class="inspector-header">
          <h3>🔍 Pinia Store</h3>

          <button
              class="toggle-button"
              @click="showInspector = !showInspector"
          >
            {{ showInspector ? 'Ausblenden' : 'Anzeigen' }}
          </button>
        </div>

        <template v-if="showInspector">

          <div class="inspector-section">
            <h4>STATE · store.$state</h4>

            <pre>{{ stateJson }}</pre>
          </div>

          <div class="inspector-section">
            <h4>GETTER · movieCount</h4>

            <div class="getter-value">
              {{ movieCount }}
            </div>
          </div>

          <div class="inspector-section">
            <h4>LOADING-STATUS</h4>

            <span :class="loading ? 'active' : 'inactive'">
              {{ loading ? '⏳ true – Lädt...' : 'false – Bereit' }}
            </span>
          </div>

        </template>
      </div>

    </div>

    <!-- Actions -->
    <div class="actions">

      <button
          class="recommend-button"
          :disabled="loading ||
          store.movies.some(m => m.id === 5)"
          @click="store.loadRecommendation()"
      >
        {{
          loading
              ? '⏳ Empfehlung wird geladen...'
              : store.movies.some(m => m.id === 5)
                  ? '✓ Empfehlung gespeichert'
                  : '🎬 Filmempfehlung laden'
        }}
      </button>

      <button
          class="reset-button"
          :disabled="loading"
          @click="store.$reset()"
      >
        ↻ Watchlist zurücksetzen
      </button>

    </div>

  </div>
</template>

<style scoped>
.demo {
  font-family: sans-serif;
  font-size: 14px;
  width: 100%;
}

.demo h2 {
  font-size: 23px;
  margin-bottom: 10px;
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1.15fr;
  gap: 12px;
  margin-top: 12px;
  align-items: stretch;
}

.panel {
  background: #fff9df;
  color: #253326;
  border-radius: 12px;
  padding: 12px;
  min-width: 0;
}

.panel :deep(h3) {
  font-size: 16px;
  margin-bottom: 8px;
}

.panel :deep(button) {
  background: #f7c948;
  color: #253326;
  border: none;
  border-radius: 5px;
  padding: 5px 8px;
  font-size: 12px;
  cursor: pointer;
}

.panel :deep(button:disabled) {
  opacity: 0.5;
  cursor: default;
}

/* Store-Inspector */
.inspector {
  background: #1e293b;
  color: #e2e8f0;
  border-radius: 12px;
  padding: 12px;
  min-width: 0;
  font-size: 12px;
}

.inspector-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.inspector-header h3 {
  font-size: 15px;
  margin: 0;
}

.toggle-button {
  background: #334155;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 11px;
}

.inspector-section {
  margin-bottom: 10px;
}

.inspector-section h4 {
  font-size: 11px;
  color: #f7c948;
  margin-bottom: 5px;
  font-weight: 600;
}

.inspector pre {
  background: #0f172a;
  color: #a7f3d0;
  padding: 10px;
  border-radius: 6px;
  font-size: 10px;
  line-height: 1.45;
  max-height: 155px;
  overflow: auto;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.getter-value {
  background: #334155;
  padding: 7px 10px;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
}

.active {
  color: #f7c948;
}

.inactive {
  color: #86efac;
}

/* Action-Buttons */
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 14px;
}

.recommend-button,
.reset-button {
  padding: 9px 14px;
  color: #253326;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
}

.recommend-button {
  background: #88ce83;
}

.reset-button {
  background: #f7c948;
}

.actions button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>