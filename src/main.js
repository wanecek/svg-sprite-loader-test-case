// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
Vue.config.productionTip = false;

import Shell from './Shell';

/* eslint-disable no-new */
new Vue({
  el: '#shell',
  template: '<Shell/>',
  components: { Shell },
});
