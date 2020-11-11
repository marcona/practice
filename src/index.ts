import Vue from 'vue';
import App from './App';
import vuetify from './plugins/vuetify' // path to vuetify export
import router from './router/router'

new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App),
});
