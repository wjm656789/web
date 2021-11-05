<template>
  <div>
     <div ref="aaa">963852</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'Test8',
  props: {
    msg: String
  },
  setup() {
    // 通过ref函数获取页面元素
    const aaa = ref<HTMLElement | null>(null)

    onMounted(() => {
      console.log(((aaa.value as HTMLElement).style.color = "red"));
    })

    return {
      aaa
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
