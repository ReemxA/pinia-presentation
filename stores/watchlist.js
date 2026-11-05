import { defineStore } from 'pinia'

export const useWatchlistStore = defineStore('watchlist', {
    state: () => ({
        movies: [],
        loading: false
    }),

    getters: {
        movieCount: (state) => state.movies.length
    },

    actions: {
        addMovie(movie) {
            if (!this.movies.some(m => m.id === movie.id)) {
                this.movies.push(movie)
            }
        },

        removeMovie(id) {
            this.movies = this.movies.filter(m => m.id !== id)
        },

        async loadRecommendation() {
            if (this.loading) return

            this.loading = true

            try {
                // Simuliert eine asynchrone API-Anfrage
                await new Promise(resolve => setTimeout(resolve, 1500))

                // Simulierte Antwort eines Filmservices
                const recommendation = {
                    id: 5,
                    title: 'The Matrix',
                    year: 1999
                }

                this.addMovie(recommendation)
            } finally {
                this.loading = false
            }
        }
    }
})