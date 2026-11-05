
import { defineStore } from 'pinia'

export const useWatchlistStore = defineStore('watchlist', {

    // STATE: Die gespeicherten Filme
    state: () => ({
        movies: []
    }),

    // GETTER: Berechnet die Anzahl der Filme
    getters: {
        movieCount: (state) => state.movies.length
    },

    // ACTIONS: Verändern den State
    actions: {
        addMovie(movie) {
            if (!this.movies.some(m => m.id === movie.id)) {
                this.movies.push(movie)
            }
        },

        removeMovie(id) {
            this.movies = this.movies.filter(m => m.id !== id)
        }
    }
})
