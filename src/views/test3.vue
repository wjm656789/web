<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ num }}</div>
    <div>{{ $store.state.msg }}</div>
    <el-button type="primary" @click="incCount">commit修改</el-button>
    <el-button type="primary" @click="incActionCount">actions修改</el-button>
    <el-button type="primary" @click="setMsg">commit修改(带参数)</el-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Test3',
  setup() {
    const store = useStore()
    let incActionCount = () => {
      store.dispatch('incCount')
    }
    return {
      count: computed(() => {
        return store.state.count
      }),
      num: computed(() => {
        return store.getters.num
      }),
      incCount: () => {
        store.commit('incCount')
      },
      incActionCount,
      setMsg: ():void => {
        store.commit('setMsg', '组合式api里面改变后的数据')
      }
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
