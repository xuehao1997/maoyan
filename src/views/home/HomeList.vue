<template>
  <div class="tab-content">
    <div class="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
        <div class="list-wrap" style="margin-top: 0px;">

            <div v-if = "movies">

             <home-item  :data = "item" v-for="item in movies.movieList" :key = "item.id"></home-item>

            </div>

        </div>
    </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
import HomeItem from './homeitem.vue'
import _ from 'lodash'
import {mapActions} from 'vuex'
export default {
 
  props: ["movies"],//父组件的数据
  //注册组件不要忘记components
  components:{
    HomeItem
  },
  methods : {
    ...mapActions(['getComingMovies'])

  },
  mounted () {//第三方库的使用必须要有真是DOM的存在
    const bs = new BScroll('.page' , {
      pullUpLoad : {
        threshold:30//距离底部的伐值为30的时候加载
      }
    })
    let count = 0;
    //滚动写在哪里，上拉加载就写在哪里
    bs.on('pullingUp' , () => {//上拉加载必须有一个选项要配置
    const moviesIds = this.movies.movieIds.slice(12);
    const arr = _.chunk(moviesIds, 11);
    console.log(arr);

    if( count == arr.length ){
      console.log('已经没有数据了');
      return;
    }

    if( count <arr.length ){
      console.log('可以进行数据请求了');
      //拉动时候写数据请求改变movies，因为数据管理都在vues中，所以不能在当前页面改变数据
      this.getComingMovies( arr[count].join(','));
    }
    
    bs.finishPullUp();//拉动结束
    count ++ ;

    }) 
  }
};
</script>

<style lang="stylus" scoped>
  .tab-content 
    height 100% 
    .page 
        height 100% 
</style>
