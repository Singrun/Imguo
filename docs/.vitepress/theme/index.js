// .vitepress/theme/index.js
import Theme from 'vitepress/theme'
import date from './components/Date.vue'
import './style.css'

export default {
    ...Theme,
    enhanceApp({ app }) {
        app.component('date', date)
    }
}
