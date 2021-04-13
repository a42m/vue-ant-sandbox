import { createApp } from 'vue';
import antd from 'ant-design-vue';
import App from './App.vue';
import store from './store';

import './theme/custom.less';

createApp(App)
  .use(store)
  .use(antd)
  .mount('#app');
