/*
 * @Date: 2021-12-23 13:45:31
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-23 14:11:40
 */
import Vue from 'vue'

import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import child from '../components/Child.vue'

Vue.use(VueRouter)
// 注入到vue实例中去
// 一个路由实例对应一个vue实例
export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'helloWorld',
            component: HelloWorld,
            children:[{
                path: '/child',
                component: child
            }]
        }
    ]
})