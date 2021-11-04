<template>
  <div>
    我是子组件childern&nbsp;&nbsp;&nbsp;&nbsp;{{ description }}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Children',
  // 父传子
  props: ['username', 'age', 'count'],
  setup(props) {
    console.log('props', props)
    const description = ref(props.username + '年龄是' + props.age)
    return { description }
  }
}
</script>

<style lang="scss" scoped>

</style>
