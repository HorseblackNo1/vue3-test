<template>
   <h2>{{msg}}</h2> 
   <el-input v-model="inputValue" placeholder="Please input" />

    <el-button type="primary" @click="getInputValue">getInputValue</el-button>
    <el-input v-model="inputVal" placeholder="Please input" />

</template>

<script setup>
    import { nextTick, ref } from 'vue'
    
    let msg = ref('3.0 nextTick')

    const inputValue = ref('')
    var   inputVal  = ref('112112')
    console.log("inputValue:",inputValue)

    let getInputValue=(()=>{
        console.log("inputValue:",inputValue.value)
       
        nextTick(()=>{
             inputVal.value = inputValue.value
        })
    })
</script>

<style>

</style>

