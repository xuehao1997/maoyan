import Vue from 'vue'
import VueRouter from 'vue-router'
//引入组件
import Home from '../views/home'
import Mine from '../views/mine'
import Cinema from '../views/cinema'
import Error from '../views/error'
import HomeComing from '../views/home/homecoming.vue'
import HomeHot from '../views/home/homehot.vue'
import City from '../views/city'
 //使用router
Vue.use(VueRouter)

const router  = new VueRouter({
    mode:'history',
    routes:[
        {//路由的重定向
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
            //二级路由的重定向
            redirect:'/home/f-hotting',
            //Home页面中的二级路由
            children:[
                {
                    path:'f-coming',
                    component:HomeComing,
                    name:'f-coming'
                },
                {
                    path:'f-hotting',
                    component:HomeHot,
                    name:'f-hotting'
                }
            ]
        },
        {
            path:'/cinema',
            component:Cinema
        },
        {
            path:'/mine',
            component:Mine
        },
        {
            path:'/city',
            component:City
        },
        {
            path:'*',
            component:Error
        }
    ]
})

//导出路由，应该全局注入：main.js
export default router