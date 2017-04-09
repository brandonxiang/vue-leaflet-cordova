// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueLeaflet from 'vueleaflet'
import Routes from './router/index'
import vuexI18n from 'vuex-i18n';

// Import F7, F7-Vue
import 'framework7'
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import 'framework7/dist/css/framework7.ios.min.css'
import 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/
import locales from './locales/locales'

Vue.use(Framework7Vue)

import App from './App'

Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store,
    app: module,
  },
});

Vue.use(vuexI18n.plugin, store);
Vue.use(VueLeaflet.plugin, store);
Vue.i18n.add('en', locales['en']);
Vue.i18n.add('zh-CN', locales['zh-CN']);
Vue.i18n.set('zh-CN');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  framework7: {
    root: '#app',
    modalTitle: 'title',
    modalButtonOk: 'ok',
    modalButtonCancel: 'cancel',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
  },
  components: { App }
})
