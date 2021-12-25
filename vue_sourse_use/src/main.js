/*
 * @Date: 2021-12-23 10:30:07
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-23 14:07:03
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//vue2.0
new Vue({
  // createElement(也就是h)是vuejs里的一个函数。这个函数的作用就是生成一个 VNode节点，
  // render 函数得到这个 VNode 节点之后，返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上。
  render: h => h(App),
  //注入vue实例
  router
}).$mount('#app')
//vue1.0
// new Vue({
//   el: '#app',
//   template:'<App/>',
//   components: {App:App}
// })
