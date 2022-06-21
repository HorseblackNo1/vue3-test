
import  { createStore  } from 'vuex'

// import axios  from 'axios'

const store  = createStore({
    state(){
        return {
            count:0,
            info:{
                name: 'mdc',
                age: '27',
                sex: '男',
                zhiwei: 'web',
                hoby: 'paly game',
            }
        }
    },
    mutations:{
        increment(state){
            state.count++
        },
        updateInfo(state,data){
            state.info.age = data.age
            state.info.hoby = data.hoby
            state.info.name = data.name
            state.info.sex = data.sex
            state.info.zhiwei = data.zhiwei
        }
    },
    actions:{
        getUserInfo({commit},data){
            console.log("getUserInfo",commit,data)
            // let _this =this;
            data.proxy.axios.post('https://mock.presstime.cn/mock/62931f5ea4d920002f10efd4/example_copy/getUserinfo',{
                name:data.name,
            })
            .then(res=>{
                console.log("res",res.data.data)
                commit('updateInfo',{
                    age: res.data.data.age,
                    hoby: res.data.data.age,
                    name: res.data.data.name,
                    sex: res.data.data.sex,
                    zhiwei:res.data.data.zhiwei,
                })
            })
            .catch(err=>{
                console.log('err',err)
            })
        }
    }
    
})

export default store;
    
   