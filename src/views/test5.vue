<template>
  <div>
    1111
    <test6 />
  </div>
</template>

<script>
import { defineComponent, reactive, onBeforeMount, onMounted, onUpdated, onBeforeUpdate, onBeforeUnmount, onUnmounted, provide } from 'vue'
import test6 from './test6.vue'
export default defineComponent({
  name: 'Test5',
  components: {
    test6
  },
  setup() {
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    // onUpdated(() => {
    //   console.log('onUpdated')
    // })
    const student = reactive({
      name: '小红',
      classname: '三年5班'
    })
    // 父传子
    provide('student', student)
  }
})
</script>

<style lang="scss" scoped>

</style>
