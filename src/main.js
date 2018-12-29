// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
// 引入Dialog可拖拽，注意文件所在目录。目前尚未发现引入的先后关系，若有再补充
import './components/directives.js';
import echarts from 'echarts'
// import axios from 'axios'
// import qs from 'qs'
import qs from 'qs';
Vue.use(qs)
Vue.prototype.$echarts = echarts 
// Vue.prototype.$ajax = axios 
// Vue.prototype.$qs = qs 
Vue.use(ElementUI);
Vue.config.productionTip = false
// 页面刷新时，重新赋值token
if (window.sessionStorage.getItem('token')) {
  store.commit(types.LOGIN, window.sessionStorage.getItem('token'))
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// new Vue({
//   el: '#app',
//   render: h => h(App)
// });
