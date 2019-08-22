// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import DangPen from './DangPen'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

new Vue({
  el: '#dangpen',
  components: { DangPen },
  template: '<DangPen/>'
})
