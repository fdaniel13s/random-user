import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue from "primevue/config";

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';

import 'primeflex/primeflex.css';
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";

const app = createApp(App);

app.use(PrimeVue, { ripple: true })//Importante para que funcione PrimeVue
    .component('pv-toolbar',Toolbar)
    .component('pv-card', Card)

app.mount('#app')
