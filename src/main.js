import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';
import VueImageChooser from 'vue-image-chooser';
import App from './App.vue';
import "./assets/style.css";
import store from './stores';




const app = createApp(App)
app.use(PrimeVue);
app.use(store);
app.use(ToastService);
app.use(ConfirmationService);
app.use(VueImageChooser);

app.mount('#app')
