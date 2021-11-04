<template>
  <div class="about">
    <el-button ref="button" type="primary" @click="btnClick">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      time: null
    }
  },
  mounted() {
    console.log('weiweiwei', this.$route.params.id)
    this.time = setInterval(() => {
      this.$refs.button.$el.click()
    }, 2000)
  },
  beforeUnmount() {
    // console.log('xxxx')
    clearInterval(this.time)
  },
  methods: {
    btnClick() {
      // console.log('weiweiwei')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
