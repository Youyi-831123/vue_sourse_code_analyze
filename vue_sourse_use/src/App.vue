<!--
 * @Date: 2021-12-23 10:30:07
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-25 15:18:12
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="handleClick">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      count: 1
    }
  },
  computed: {
    vueCount() {
      return this.$store.state.count
    }
  },
  methods : {
    handleClick() {
      this.$store.dispatch("countActions")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
