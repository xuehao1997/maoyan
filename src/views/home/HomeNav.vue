<template>
<!-- home页面的导航：正在热映，即将上映 -->
    <ul>
        <router-link
        tag = 'li'
        to = "/city" 
        class="city">
            <span>杭州</span>
            <i class="fas fa-angle-down"></i>
        </router-link>
        <li class="nav">
            <!-- 点击router-link标签  :to属性跳转 -->
            <!-- 写了命名理由采用加： -->
            <router-link href="" active-class="active" :to = "{name:'f-hotting'}">正在热映</router-link>
            <router-link href="" active-class="active" :to = "{name:'f-coming'}">即将上映</router-link>
        </li>
        <li class="search">
            <a href="">
                <i class="fas fa-search"></i>
            </a>
        </li>
    </ul>
</template>


<style lang="stylus" scoped>
@import '../../assets/css/border.styl'
@import '../../assets/css/theme.styl'
    ul 
        border 0 0 1px 0,#ccc
        height .44rem
        display flex
        .city 
            font-size .14
            margin .06rem
            display flex
            flex 70
            justify-content center
            align-items center
            span 
                font-size .12rem
                margin-right .03rem
            i 
                font-size .08rem
        .nav 
            flex 255
            display flex
            justify-content space-around
            align-items center
            a 
                height 100%
                font-weight bold
                font-size .15rem
                color #666
                line-height .44rem
                padding 0 .15rem
                &.active   //加一个类名
                    color $theme_color
                    border-bottom .02rem solid $theme_color

        .search
            flex 50
            width .45rem 
            height .45rem
            a 
                width 100% 
                display flex 
                height 100%
                justify-content center 
                align-items center
                i 
                    font-size .2rem
</style>