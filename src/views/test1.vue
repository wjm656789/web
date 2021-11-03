<template>
  <div>
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const title:string = '我是一个home组件'
export default defineComponent({
  name: 'App',
  data() {
    return {
      title
    }
  }
})
</script>

<style lang="scss">

</style>
