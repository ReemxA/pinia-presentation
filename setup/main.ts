import { defineAppSetup } from '@slidev/types'
import { createPinia } from 'pinia'

export default defineAppSetup(({ app }) => {
    app.use(createPinia())
})
