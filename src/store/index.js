import Vue from 'vue'
import Vuex from 'vuex'
import home from '../views/home/store'

Vue.use(Vuex)



const store = new Vuex.Store({
    //数据分块
    modules:{
        home
    }
});
//全局注入
export default store