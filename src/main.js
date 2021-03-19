
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router.js';
import VueTextAreaAutosize from 'vue-textarea-autosize';

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false;


Vue.config.productionTip = false;
new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')

