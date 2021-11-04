<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <!--      get传值，利用this.$route.query接收-->
      <!--      <router-link to="/about?id=2&level=5">About</router-link>-->
      <!--      params传参-->
      <router-link :to="{name:'About',params:{id:123}}">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
