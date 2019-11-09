<template>
    <div class="home-box">
        <HomeNav></HomeNav>
        <Router-view></Router-view>
        <!-- <HomeList></HomeList> -->
    </div>
</template>

<script>
import HomeNav from './HomeNav'
import HomeList from './HomeList'

export default {
    components:{
        HomeNav,
        HomeList
    }
}
</script>

<style lang="stylus" scoped>
    .home-box 
        flex 1
        display flex!important
        flex-direction column!important
        overflow hidden
</style>