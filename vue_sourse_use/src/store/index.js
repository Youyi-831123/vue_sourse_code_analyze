/*
 * @Date: 2021-12-25 13:29:39
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-25 15:20:07
 */
import vuex from 'vuex'
import Vue from 'vue'

Vue.use(vuex)
export default new vuex.Store({
    state: {
        count: 0
    },
    // 同步执行代码
    mutations: {
        changeCount(state){
            state.count = n
        }
    },
    //异步执行代码
    actions: {
        countActions({commit}) {
            setTimeout(() => {
                // 后台返回的data
                commit("changeCount",data)
            }, 0);
        }
    },
    modules : {
        
    }
})