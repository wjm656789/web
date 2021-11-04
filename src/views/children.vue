<template>
  <div>
    我是子组件childern
  </div>
</template>

<script>
export default {
  name: 'Children',
  // 父传子
  props: ['username', 'age', 'count'],
  setup(props) {
    console.log('props', props)
  }
}
</script>

<style lang="scss" scoped>

</style>
