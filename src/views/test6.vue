<template>
  <div>
    <div>555555</div>
    {{ student }}
  </div>
</template>

<script>
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'Test6',
  setup() {
    // 儿子接收
    const student = inject('student')
    return { student }
  }
})
</script>

<style scoped>

</style>
