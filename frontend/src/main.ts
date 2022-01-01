import { createApp, h } from 'vue';
import App from './App.vue';

import router from './router';
import { registerComponents } from '@/components';
import { registerDirectives } from '@/directives';

import 'bootstrap/dist/css/bootstrap.css';

import { apolloProvider } from './services/apollo';
const app = createApp({
  render: () => h(App)
});

registerComponents(app);
registerDirectives(app);

app.use(router);
app.use(apolloProvider);
app.mount('#app');
