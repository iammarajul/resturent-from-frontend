import "primeflex/primeflex.css";
import PrimeVue from 'primevue/config';
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import { createApp } from 'vue';
import App from './App.vue';
import "./assets/style.css";

const app = createApp(App)
app.use(PrimeVue);


app.mount('#app')
