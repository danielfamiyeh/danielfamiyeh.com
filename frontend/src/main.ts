import { createApp, h } from 'vue';
import App from './App.vue';

import router from './router';
import { registerComponents } from '@/components';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

console.log(process.env);

import { apolloProvider } from './services/apollo';
const app = createApp({
  render: () => h(App)
});

registerComponents(app);

app.use(router);
app.use(apolloProvider);
app.mount('#app');
