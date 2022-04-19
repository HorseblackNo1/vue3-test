<template>
    <div class="subBox" >
    
     <url>
        <li v-for="( {id,title,message },index) in items" :key="index" @click="getItme({id,title,message})">
            {{id}}---{{title}}----{{message}}
        </li>
    </url>
    
    </div>


   
</template>
<script setup>

import { ref,defineProps, defineEmits,defineExpose} from 'vue'


   const emit= defineEmits(['getItme'])
   const props=  defineProps(['items'])
//    function  clickSubBox() {
//        console.log("clickSubBox 触发",)
//     }
    console.log("SubProps", props,props.items)

    function getItme(arg){
        // console.log("getItme:",arg)
        emit("getItme",arg)
    }
    let aa = ref(10);
    let msg ="this is an apple" ;

    defineExpose({
        aa,
        msg
    })
    

</script>
<style scoped>
.subBox{
    width: 200px;
    height: 200px;
    background: red;

}

</style>
