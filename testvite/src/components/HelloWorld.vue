<template>
  <h1>{{ msg }}</h1>
</template>


<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()

const msg = ref('welcome')

const count = ref(0)
</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
