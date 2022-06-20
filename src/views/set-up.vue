<template>
  <div>
    {{ msg }}--{{ count }}--{{ state.count }}=={{ author.name }}=={{
      publishedBooksMessage
    }}
    <div>
      <button @click="clickMe">clickMe</button>
    </div>

    <ul>
      <!-- <li v-for="(item,index) in items" :key="index">
      {{item.id}}--{{item.title}}--{{item.message}}
      </li> -->

      <!-- 解构 -->
      <!-- <li v-for="{ id, title, message} in items" :key="id">
      {{id}}--{{title}}--{{ message}}
      </li> -->

      <!-- 解构 和 index -->
      <li v-for="({ id, title, message }, index) in items" :key="index">
        {{ id }}--{{ title }}--{{ message }}---{{ index }}
      </li>
      <!-- <li v-for="value of myObject" :key="value">
        {{value}}
      </li> -->

      <li class="text" v-for="(value, key, index) of myObject" :key="index">
        {{ key }}----{{ value }}
      </li>
    </ul>
    <!-- <span v-for="n in 10" :key="n">{{ n }}</span> -->

    <setupSub
      :items="items"
      @getItme="getItme"
      ref="setupSubInstance"
    ></setupSub>
  </div>
</template>

<script setup>
// import { ref,toRef,reactive} from 'vue'
// import { toRefs } from 'vue'
import { reactive,ref,computed,onMounted,defineProps,} from 'vue'
import setupSub from '@/components/setupSub.vue'


const setupSubInstance = ref(null)
// const color =ref('pink')
let theme={
  color:"#333",
  background:"green"
}
onMounted(()=>{
  console.log("onMounted: this component is now mounted",)
  console.log("setupSubInstance",setupSubInstance.value,setupSubInstance.value.aa,setupSubInstance.value.msg)
})

function getItme(data){
  console.log("getItme father",data,items)
  let curr = items.value.findIndex((o)=>{ return data.id == o.id })
  console.log("curr",curr)
  if(data.id>-1){
    items.value[curr].id="123"
    items.value[curr].title="update"
    items.value[curr].message="message"
  }

}

// defineProps(['msg'])
const props = defineProps(['msg'])
console.log("propsddd:",props,props.msg)
let count = ref(0)

const author = reactive({
  name:'Jhon Doe',
  books:[
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery',
    'January   一月',
    'February 二月',
    'March 三月',
    'April   四月',
    'May 五月',
    'June 六月',
    'July   七月',
    'August 八月',
    'September 九月',
    'October   十月',
    'Novemeber 十一月',
    'December 十二月',
  ]
})

const myObject = reactive({
  title:'How to to lists in Vue',
  author:'Jane Doe',
  publishedAt:'2016-04-10'
})
const items = ref([
  { 
    id:0,
    title:'test1',
    message:'Foo'
  },{ 
    id:1,
    title:'test2',
    message:'Bar'
  },{ 
    id:2,
    title:'test3',
    message:'Bar'
  }
 ])
const publishedBooksMessage = computed(()=>{
  return  author.books.length > 0 ? "yes" : "no"
})
const state = reactive({
  count:1
})
function clickMe(){
  count.value+=1
  state.count+=1
}


// export default {
//   name: 'setUp',
//   props: {
//     msg: String
//   },


  // setup(props,context){

    // console.log("props",props,props.msg)

    // //context 对象不是响应式的 可以安全的结构
    // //set(props,{ attrs,slots,emit,expose }){}
    // console.log("context:",context)
    // console.log("context.attrs:",context.attrs)
    // console.log("context.slots:",context.slots)
    // console.log("context.emit:",context.emit)
    // console.log("context.expose:",context.expose)


    //多个props 解构
    // const { msg } = toRefs(props)

    // console.log("toRefs",msg.value)
    
/*
  export default {
    setup(){
      onMounted(()=>{
        console.log('Component is mounted')
      })
    }
  }

  beforeCreate       not neeed
  created            not need
  beforeMount        onBeforeMount
  mounted            onMounted
  beforeUpdate       onBeforeUpdate
  updated            onUpdated
  beforeUnmount      onBeforeUnmount
  unmounted          onUnmounted
  errorCaptured      onErrorCaputred
  renderTriggered    onRenderTriggered
  activated          onActivated
  deactivated        onDecativated

  使用 provoid  先从 vue 显示导入 provide方法 能够调用provide 来定义每个property
  
  provide 函数允许通过两个 参数定义 property

  1 name string 类型
  2 value
  
  import { provide } from 'vue'
  import MyMarker form './myMarker.vue'

  exprot default {

    components:{
      MyMarker
    },

    setup(){
      provide('location','North Pole')
      provide('geolocation',{
        longitude:90,
        latitude:135
      })
    }

  }


  inject 需要从 vue 显示导入 倒入以后可以调用它来定义暴露给我们的组件方式
  inject 函数有两参数 
  inject 的property 的 name
  默认值 可选

  import { inject } from 'vue'

  export defalut {
    setup(){

      const userLocation = inject('loaction','The Universe')
      const userGeoloaction = inject('geoloaction')

      return {
        userLocation,
        userGeolocation

      }
    }
  }

  响应性
  添加响应性
  为增加 provide 值 和 inject 值 之间的响应性，在provide 值使用 ref 或 reactive

  import { provide,reactive,ref } from 'vue'
  import MyMarker form './MyMarker.vue'

  setup(){

    const location = ref('North Pole')
    const geolocation = reactive({
      longtitude:90,
      latitude:135
    })

    provide('location',loaction)
    provide('geolocation',geolocation)
  }

  import { provid,reactive,redonly,ref } from 'vue'

  setup(){
    const loaction = ref('North Pole')
    const geolocation = reactive({
      longitude:90,
      latitude:135
    })

    const updateLoaction=()=>{
      location.value="South Pole" 
    }

    provide('location',readonly(location))
    provide('geolocation',redonly(geolocation))
    provide('updateLocation',updadteLocation)

  }

  <div ref="root">this is a root element</div>

  import { ref,onMounted } from 'vue'

  exprot default{
    setup(){
      
      onMounted(()=>{
        console.log(root.value)
      })

      return { root }

    }
  }













*/



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  color: v-bind("theme.color");
  background: v-bind("theme.background");
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
