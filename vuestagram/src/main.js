import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter; // 글로벌 변수보관함, import할 필요 x

import store from './store';
import './registerServiceWorker'



app.use(store).mount('#app')