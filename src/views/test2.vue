<template>
  <div class="container">
    <span class="title">{{ title }}</span>
    <el-button type="primary" @click="setTitle(188)">点我</el-button>
    <div>{{ username }}</div>
    <el-button type="primary" @click="setUsername('旺仔')">点我</el-button>
    <div>{{ getUsername() }}</div>
    <div>{{ count }}</div>
    <div>{{reverseUsername}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed } from 'vue'
const title:any = '我是一个新闻'
interface User{
  username:string,
  age:number,
  setUsername(username:string):void,
  getUsername():string
}

export default defineComponent({
  name: 'Test2',
  setup() {
    let user:User = reactive({
      username: '张三',
      age: 20,
      setUsername(username:string) {
        this.username = username
      },
      getUsername() {
        return this.username
      }
    })
    let count = ref<number|string>(20)

    let reverseUsername = computed(() => {
      return user.username.split('').reverse().join('')
    })
    // 实现接口的第二种写法
    // let user = reactive<User>({
    //   username: '张三',
    //   age: 20,
    //   setUsername(username:string) {
    //     this.username = username
    //   },
    //   getUsername() {
    //     return this.username
    //   }
    // })

    // 实现接口的第三种写法
    // let user = reactive({
    //   username: '张三',
    //   age: 20,
    //   setUsername(username:string) {
    //     this.username = username
    //   },
    //   getUsername() {
    //     return this.username
    //   }
    // }) as User

    return {
      ...toRefs(user),
      count,
      reverseUsername
    }
  },
  data() {
    return {
      title
    }
  },
  methods: {
    setTitle(title:number):void{
      this.title = title
    }
  }
})
</script>

<style lang="scss" scoped>
.container{
  /deep/.title{
    color:red
  }
}
</style>
