<template>
    <div class="content">
        <!-- header -->
        <Left></Left>
        <div class="down">
            <Header></Header>
            <Main></Main>
        </div>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script setup lang="ts">
import Header from './header/index.vue'
import Left from './left/index.vue'
import Main from './main/index.vue'
// import { defineComponent } from '@vue/composition-api'
// export default({
//     setup() {
        
//     },
// })
</script>

<style scoped>
.content{
    height: 100vh;
    width: 100%;
    background-color: bisque;
    display: flex;
}
.content .down{
    flex: 1;
}
</style>
