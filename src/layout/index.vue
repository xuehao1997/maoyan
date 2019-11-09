<template>
    
    <div class = "lay-out-box">
        <Tab></Tab>
        <!-- <Home>路由要切换的页面</Home> -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        
        <TabNav></TabNav>
    </div>
</template>

<script>
import Tab from '../components/common/Tab.vue'
import TabNav from '../components/common/TabNav.vue'
import Home from '../views/home'
export default {
    components:{
        Tab,TabNav,Home
    }
}
</script>

<style lang="stylus" scoped>
    .lay-out-box
        height 100%
        display flex
        flex-direction column
</style>