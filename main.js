import App from './App'

// #ifndef VUE3
import Vue from 'vue'
//引入组件库
import uView from "uview-ui";
Vue.use(uView);

//挂件全局组件
import MyComp from'components/text-my-comp.vue'
Vue.component('test-my-comp',MyComp)
import NavCustom from 'components/nav-custom.vue'
Vue.component('nav-custom',NavCustom)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif