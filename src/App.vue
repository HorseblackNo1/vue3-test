<template>

  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <elNextTick/>
  <setUp msg="compontion API"/>
  <elStore/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import setUp from '@/views/set-up.vue'
import elStore from './components/el-store.vue'
import elNextTick from './components/el-nextTick.vue'




export default {
  name: 'App',
  components: {
    HelloWorld,
    setUp,
    elStore,
    elNextTick,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
