import axios from 'axios'
const GET_MOVIES = 'GET_MOVIES'
const GET_COMING_MOVIES = 'GET_COMING_MOVIES'

export default{
    state:{
        movies:null
    },
    actions:{
        getMovies ({commit}){
                axios({
                    url:'/ajax/movieOnInfoList',
                    params:{
                        token:''
                    }
                }).then(res => {
                    //拿到的数据给mutations处理
                    commit({
                        type:GET_MOVIES,
                        payload:res.data
                    })
                })
        },
        //拉动的数据请求
        getComingMovies ( {commit},movieIds) {
            axios({
                url:'ajax/moreComingList',
                params:{
                    token:'',
                    movieIds
                }
            }).then( res => {
                commit({
                    type:GET_COMING_MOVIES,
                    payload:res.data
                })
            })

        }
    },
    mutations:{
        GET_MOVIES (state , action) {
            state.movies = action.payload
        },
        GET_COMING_MOVIES (state , action) {
            state.movies.movieList.push(...action.payload.coming)
        }
    }
}