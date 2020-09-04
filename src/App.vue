<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div id="nav">
    <button @click="toAbout">about</button>
    {{getInfo()}}
    <button @click="toHome">home</button>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import userService from './services/UserService'

export default defineComponent({
  name: 'App',
  setup () {
    const router = useRouter()
    const toHome = () => {
      router.push({
        name: 'Home',
        query: {
          fromPage: 'about'
        }
      })
    }
    const toAbout = () => {
      router.push({
        name: 'About'
      })
    }

    return {
      toHome,
      toAbout,
      getInfo: userService.getInfo
    }
  }
})
</script>

<style lang="scss">
  // global style here
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
