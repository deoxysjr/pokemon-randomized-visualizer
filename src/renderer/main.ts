import { createApp } from 'vue'
import './style.css';
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

// vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// vue Components
import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App).use(vuetify);

app.mount('#app');
