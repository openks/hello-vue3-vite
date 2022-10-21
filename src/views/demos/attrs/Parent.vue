<template>
  <child id="root" class="test" name="张三" @confirm="getData" />
  <div class="border border-black ">这里是父组件</div>
  <el-button>Default</el-button>
</template>

<script lang="ts" setup>
import child from './child.vue'

const getData = () => {
  console.log('log')
}
</script>