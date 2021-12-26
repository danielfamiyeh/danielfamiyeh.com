import { createApp, h } from 'vue';

import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { apolloProvider } from './services/apollo';

const app = createApp({
  render: () => h(App)
});

app.use(router);
app.use(apolloProvider);
app.mount('#app');
