<template>
  <div>
    <div ref="div" :class="{abv:active}">生命周期函数</div>
    <el-button @click="changeStyle">点我</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated,
  onBeforeUnmount, onUnmounted, ref, toRefs } from 'vue'
export default defineComponent({
  name: 'Test7',
  setup() {
    // function changeStyle() {
    //
    // }

    let style = reactive({
      active: false,
      changeStyle() {
        style.active = !style.active
      }
    })
    let div = ref(null)
    onBeforeMount(() => {
      console.log('onBeforeMount')
      // 在挂载前执行
    })
    onMounted(() => {
      // 获取dom对象
      console.log('onMounted', div.value)
      // 在挂载后执行
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
      // 在更新前前执行
    })
    onUpdated(() => {
      console.log('onUpdated')
      // 在更新后执行
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
      // 在组件销毁前执行
    })
    onUnmounted(() => {
      console.log('onUnmounted')
      // 在组件销毁后执行
    })
    return { ...toRefs(style), div }
  }
  // mounted() {
  //   console.log('xxxxvue生命周期函數')
  // }
})
</script>

<style lang="scss" scoped>
  .abv{
    color:red
  }
</style>
