import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vuex from   'vuex'
import store from './store'
import  axios from 'axios'
import  VueAxios  from 'vue-axios'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';



const app= createApp(App)


app.use(router)
app.use(store)
app.use(Vuex)
app.use(ElementPlus)
app.use(VueAxios,axios)







app.mount('#app')

