<template>
  <div>
    <div>{{ num }}&nbsp;&nbsp;&nbsp;{{ count }}</div>
    <el-button type="primary" @click="changeNum">点我修改num count</el-button>
    <div>{{ user.username }}</div>
    <div>使用toRefs渲染{{ username }}</div>
    <div>{{ reverseType }}</div>
    年龄：{{ age }}
    <el-button type="primary" @click="changeAge(20)">点我修改年龄</el-button>
    <div>{{ type }}</div>
    <el-button type="primary" @click="changeType">点我修改type</el-button>
    <children :username="username" :age="age" :count="count" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed, watch, watchEffect } from 'vue'
import children from './children.vue'
interface User{
  username:string,
  age:number,
  type:string,
  reverseType:any,
  changeAge:any
}

export default defineComponent({
  name: 'Test4',
  components: {
    children
  },
  setup() {
    let num = ref(0)
    let count = ref(50)

    function changeNum() {
      num.value += 10
      count.value += 5
    }

    function changeType() {
      user.type = '萎靡小伙'
    }

    const user:User = reactive({
      count: count.value,
      username: '老陈',
      age: 30,
      type: '精神小伙',
      reverseType: computed(() => {
        return user.type.split('').reverse().join('')
      }),
      changeAge(age:number) {
        // this.age = age
        user.age = age // 第二种写法
      }
    })

    watchEffect(() => {
      // console.log(user.type)
      // console.log('当userType改变时候，会触发执行此函数')
      // console.log(user.age)
      // console.log('当userAge改变时候，会触发执行此函数')
      // 监听num不生效
      // console.log(num)
      // console.log('当num改变时候，会触发执行此函数')
    })

    watch(num, (newVal, prevVal) => {
      // console.log(newVal, prevVal)
      // console.log('当num改变时候,会触发执行此函数')
    })
    watch(count, (newVal, prevVal) => {
      // console.log(newVal, prevVal)
      // console.log('当count改变时候,会触发执行此函数')
    })

    // watch([num, count], (newVal, prevVal) => {
    //   console.log(newVal, prevVal)
    //   console.log('当num和count改变时候,会触发执行此函数')
    // })

    return { num, count, changeNum, changeType, user, ...toRefs(user) }
  },
  beforeCreate() {
    // console.log('beforeCreate:初始化数据之前')
  },
  created() {
    // console.log('created:数据初始化之后')
  },
  beforeMount() {
    // console.log('beforeMount:挂载渲染之前')
  }
})
</script>

<style lang="scss" scoped>

</style>
