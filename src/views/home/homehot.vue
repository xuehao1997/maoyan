<template>
    <div>
        <!-- 正在热映展示的就是电影列表 -->
        <!-- 组件通信：父子通信 -->
        <!-- 组件嵌套 -->
        <HomeList :movies = "movies"></HomeList>
    </div>
</template>

<script>
import HomeList from './HomeList'
import BScroll from 'better-scroll'
//简便写法:遍历状态，遍历方法
import { mapState , mapActions , mapMutations } from 'vuex'
export default {
    components:{
        HomeList
    },
    mounted () {//进入页面初始化阶段
        //做数据请求
        //this.$store.dispatch('getMovies');
        //简便写法
        this.getMovies()
    },
    methods:{
        ...mapActions(['getMovies'])//actions方法有多个，所以要用数组
        //...mapMutations(['GET_MOVIES'])
    },
    computed:{
        // movies () {
        //     return this.$store.state.home.movies;
        // }
        //简便写法
        ...mapState({
            movies:state => state.home.movies
        })
    }
}
</script>
<style lang="stylus" scoped>
    div 
        flex 1
        overflow hidden
</style>