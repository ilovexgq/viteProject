<template>
  <div>
    one

    <el-button type="primary" @click="clickBtm">Primary</el-button>
  </div>
</template>

<script lang="ts" setup>
import { TestStore } from "../store/modules/test";

const testStore = TestStore();

const clickBtm = () => {
  console.log(1);
  testStore.setToken("255");
};
</script>

