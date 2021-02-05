import { createApp } from 'vue'

require('@/assets/sass/main.scss')

// Font
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTwitter)

// Pages
import ColorfulRunner from './pages/ColorfulRunner.vue'

// Components
import PrivacyPolicy from './components/PrivacyPolicy'

// App
const app = createApp(ColorfulRunner)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('privacy-policy', PrivacyPolicy)

app.mount('#app')

