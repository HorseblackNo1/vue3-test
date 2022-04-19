<template>
  <div>
    {{msg}}--{{ count }}--{{ state.count }}=={{author.name}}=={{publishedBooksMessage}}
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
      <li v-for="({ id, title, message},index) in items" :key="index">
      {{id}}--{{title}}--{{ message}}---{{index}}
      </li> 
      <!-- <li v-for="value of myObject" :key="value">
        {{value}}
      </li> -->

        <li class="text" v-for="(value,key,index) of myObject" :key="index">
        {{key}}----{{value}}
      </li>
    </ul>
    <!-- <span v-for="n in 10" :key="n">{{ n }}</span> -->

    <setupSub :items="items" @getItme="getItme" ref="setupSubInstance"></setupSub>
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
      import { createApp,reactive } from 'vue'
      
      const app = createApp({

      })\

      const app = createApp({
        data(){
          return { count:0 } 
        }
      })

      app.config.errorHandleer = (err)=>{

      }

      v-html 渲染 html 标签元素
      v-bind:id = "dynamicId"
      :id = "dynamicId"
      :disable = "isButtonDisabled"
      {{ number +1 }}

      {{ ok? 'yes':'no' }}
      {{message.split('').reverse().join('')}}

      <div :id="`list-${id}`"></div>

      v-html
      v-bind
      v-for
      v-on
      v-solt

      v-bind:href="xxx"
      :href="xxx"
      v-on:click="xxx"
      @click="xxx"


      <a v-bind:[attributeName] = "url"> </a>
      <a :[attributeName] = "url"></a>

      v-on:submit.prevent = "obSubmit"


      app.component('TodoDeleteButoon',TodoDeleteButton)


      import { 
        createApp,
        ref,
        reactive,
        nextTick,
        computed,
        onMounted,
        onUpdated,
        onUnmounted,
        defineProps,
        defineEmits,
        } from 'vue'

      function increment(){
        state.count++

        nextTick(()=>{

        })
      }

      const obj = reactive({
        nested:{ count:0 },
        arr:['foo','bar']
      })
      function mutateDeeply(){
        obj.nested.count++
        obj.arr.push('baz')
      }
      const state = reactive({count:0})

      setup(){
        const state = reactive({
          
          return {
            state
          }

        })
      }
      <div>{{state.count}}</div>



      const raw={}

      const proxy = reative(raw)

      console.log(proxy == raw) //false

      console.log(reactive(raw) === proxy) true
      console.log(reactive(proxy) === proxy) true



      <div :class="[ isActice ? acticeClass :'',errorClass ]"></div>

      <div :class="[  { active:isActive },errorClass  ]"></div>

      v-if
      v-else

      v-if
      v-else-if
      v-else

      v-if
      v-show

      v-if v-for  v-if 的级别高

      :class="{ active:isActive }"

      :class ="{ active:isActive,'text-danger':hasError }"

      :class="clasObject"

      classObject:{
        active:true,
        'text-danger':false
      }

      :class="[activeClass,errorClass]"

      三元表达式中class，可以使用三元表达式
        :class="[ isActive?activeClass:'',errorClass ]"

        css property 名 可以用驼峰 camelCase 或 短横线分隔（kebab-case，用引号括起来）
        
        :style="{ color:activeColor, fontSize:fontSize+'px' }"

        :style="[baseStyles,overidingStyles]"
        
        :style ={ display:[ '-webkit-box','-ms-flexbox','flex' ] }

        .stop
        .prevent
        .capture
        .self
        .once
        .passive

        @click.stop="doThis"
        
        @submit.prevent="onSubmit"

        @click.stop.prevent="doThat"

        @submit.prevent

        @click.capture="doThis"

        @click.self="doThat"

        @keyup.enter="submit"

        @keyup.page-down = onPageDown

        .enter
        .tab
        .delete(删除和 退格)
        .esc
        .space
        .up
        .down
        .left
        .right

        系统修饰键
        .ctrl
        .alt
        .shift
        .meta


        鼠标按钮修饰符
        .left
        .right
        .middle

        const app = Vue.createApp({
          data(){
            return { count:4 }
          }
        })

        const vm = app.mount('#app')
        vm.$data.count
        vm.count

        vm.count = 5

        vm.$data.count

        vm.$ata.count = 6
        vm.count


        const app = Vue.createApp({
          data(){
            return { count:4 }
          },
          methods:{
            increment(){
              this.count++
            }
          }
        })
        const vm = app.mount('#app')

        vm.increment()
        <button @click="increment"> Up vote </button>

      const items = ref( [ { message:'Foo' },{ message:'Bar' }  ] )
      <li v-for="item in itmes">
        {{item.message}}
      </li>

      v-on @

      v-on:click = "xxx"
      @click = "xxx"

      Inline Handles
      <button @click = "count++"></button>

      <button @click="greet"></button>
      function greet(event){
        alert(`Hello ${name.value}`)
        if(event){
          alert(event.target.tagName)
        }
      }

      .stop
      .prevent
      .self
      .capturre
      .once
      .passive

      <a @click.stop = "doThis"></a>
      <from @submit.prevent = "onSubmit"></from>

      <a @click.stop.prevent = "doThis"></a>
      <from @submit.prevent ></from>

      <a @click.self = "doThis"></a>

      <div @click.capture="doThis"></div>
      <div @click.once="doThis"></div>
      <div @scroll.passive.once="doThis"></div>


      key Modifiers

      <input @keyup.enter="submit" />

      <input @keyup/page-down="onPageDown" />

      
      key Aliases
      
      .enter
      .tab
      .delete
      .esc
      .space
      .up
      .down
      .left
      .right
      .ctrl
      .alt
      .shift
      .meta

      <input @keyup.alt.enter="clear"/>

      <div @click.ctrl="doSomething"></div>


      defineProps,defineEmits

      const props = defineProps({
        foo:String
      })

      const emit = defineEmits(['change','delete'])




      import { ref,onMounted } from 'vue'
      
      const input = ref(null)

      onMounted(()=>{
        input.value.focus()
      })
      <input ref="input" />


      beforeCreate  =》 setup

      creted =》 setup

      beforeMount => onBeforeMount

      mounted => onMounted

      beforeUpdate => onBeforeUpdate

      updated => onUpdateed

      beforeUnmount => onBeforeUnmount

      unmounted => onUnmounted

      errorCapturred => onErrorCaptured

      renderTracked => onRenderTeacked

      renderTriggerd => onRenderTriggered
      
      activated => onActivated
      deactiveated => onDeactivated


    */
    //单个参数 解构
    // const msg = toRef(props,'msg')
    //  console.log("toRefddd",msg.value)

    // let count =ref(0)
    // // let clickMe = ()=>{
    // //   count.value+=1
    // // }
    // console.log("count",count.value)

    // let state = reactive({
    //   sss:20
    // })

    // let clickMe= ()=>{
    //   state.sss+=1

    //   console.log("state:",state)
    // }

    

    // const time = ref(1);

    // const plusTTime = computed(()=>{ time.value+1 })

    //  console.log("plusTTime",plusTTime)

  //   return {
  //     count,
  //     clickMe,
  //     state,
  //   }
  // },
//   mounted(){
//     console.log(this.count)
//      console.log(this.msg)
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text{
  color: v-bind('theme.color');
  background: v-bind('theme.background')
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
