<template>
  <div class="home">
    <HelloWorld @reset-counter="resetCounter" msg="Welcome to Vue.js" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { useStore } from '@/store'
import { MutationTypes } from '@/store/mutation-types'

export default defineComponent({
  name: 'Home',
  setup () {
    const store = useStore()
    function resetCounter () {
      store.commit(MutationTypes.SET_COUNTER, 0)
    }
    onMounted(() => {
      console.log('Home page mounted')
    })
    return {
      resetCounter
    }
  },
  components: {
    HelloWorld
  }
})
</script>
