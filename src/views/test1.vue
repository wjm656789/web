<template>
  <div>
    <div>{{ title }}</div>
    <div>{{ newsData.count }}</div>
    <div>{{ reverseTitle }}</div>
    <el-button type="primary" @click="setTitle">点我</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const title:string = '我是一个home组件'

interface News{
  title:string,
  description:string,
  count:number | string,
  content?:string
}

const newsData:News = {
  title: '我是一个新闻',
  description: '我是一个新闻的描述',
  count: 12,
  content: '18'
}
// 写法二
// const newsData = {
//   title: '我是一个新闻',
//   description: '我是一个新闻的描述',
//   count: 12,
//   content: '18'
// } as News
export default defineComponent({
  name: 'App',
  data() {
    return {
      title,
      newsData
    }
  },
  computed: {
    reverseTitle():string {
      return this.title.split('').reverse().join('')
    }
  },
  methods: {
    setTitle():void{
      this.newsData.count = 19
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
