<template>

        <h2>{{ msg }}</h2>
        <p>{{ count }}</p>

        <el-button type="primary" @click="changState">change store.state</el-button>
        <div class="infoBox">
            <div v-for="(item,index) in info " :key="index">
            {{index}}--------  {{item}}
            </div>
        </div>

        <el-button type="primary" @click="changState1">change store.state</el-button>
</template>

    <script setup>
        import { ref, computed,getCurrentInstance } from 'vue'
        import { useStore} from 'vuex'
        
        const { proxy } = getCurrentInstance()
        const internalInstance = getCurrentInstance()
        console.log("this",this)
        console.log("internalInstance",internalInstance)

        const msg = ref('storeMoudle')
        const store = useStore()

        const count= computed(() => store.state.count )
        let info = computed(()=> store.state.info)
        const changState=()=>{ store.commit('increment')}
        const changState1=()=>{ 
            store.dispatch({
                type:'getUserInfo',
                proxy,
                name:'123'
            })}


        









    </script>
<!-- 
    <script>
    import { ref } from 'vue'
    import { useStore } from 'vuex'
    
    export default {
        setup(){
            const msg = ref('storeModule')

            const store = useStore()
            console.log("store",store.state.count)


            return {
                msg
            }

        }
    }

    </script> -->
    <style>
    .infoBox{
        padding: 20px;
        background: gray;
    }

    </style>