<template>
    <footer>
        <ul>
            <!-- <li v-for = "item in tabbars" :key = "item.id">
                <i class="fas" :class = "[ item.icon ]"></i>
                <span> {{ item.text }} </span>
            </li> -->
            <router-link 
            tag = 'li'
            :to = "item.path"
            v-for = "item in tabbars" 
            :key = "item.id"
            active-class = 'active'
            >
                     <i class="fas" :class = "[ item.icon ]"></i>
                <span> {{ item.text }} </span>
            </router-link>
        </ul>
    </footer>
</template>


<script>
export default {
    data () {
        return {
            tabbars:[
                {
                    id:1,
                    text:'首页',
                    path:'/home',
                    icon:'fa-home'
                },
                {
                    id:2,
                    text:'影院',
                    path:'/cinema',
                    icon:'fa-horse'
                },
                {
                    id:3,
                    text:'我的',
                    path:'/mine',
                    icon:'fa-user-secret'
                }
            ]  
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/theme.styl'
@import '../../assets/css/border.styl'
    footer 
        background white
        width 100% 
        height .48rem
        padding-top .04rem
        border 1px 0 0 0,#ccc
        ul 
            display flex
            //项目周围留白
            justify-content space-around
            li 
                display flex
                flex-direction column
                justify-content center
                align-items center
                &.active
                    i 
                        color $theme_color
                    span 
                        color $theme_color
                i 
                    font-size .25rem
                    margin-top .04rem
                    color gray
                span 
                    font-size .12rem
                    color gray
</style>