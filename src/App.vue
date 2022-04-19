<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <setUp msg="compontion API"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import setUp from '@/views/set-up.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    setUp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
