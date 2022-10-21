<template>
  <div>
    这里是子组件
    <span>hello：{{ props.name }}</span>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script lang="ts" setup>
import {useAttrs} from 'vue'
const props = defineProps(['name'])

const attrs = useAttrs()
console.log('attrs', attrs)
</script>