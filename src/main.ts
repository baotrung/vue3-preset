import { createApp } from 'vue';
import { store, key } from '@src/store';
import { router } from '@src/router';
import './styles/theme.scss';
import App from './App.vue';

createApp(App).use(store, key).use(router).mount('#app');
