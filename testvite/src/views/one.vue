<template>
    <div>one

        <el-button type="primary" @click="clickBtm">Primary</el-button>
    </div>
</template>

<script lang="ts" setup>
// import { useStore } from '../store/index'
const store = useStore()


const clickBtm = ()=>{
    console.log(1)
    store.setToken('255')
}

</script>

