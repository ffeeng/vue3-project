<template>
  <div class="about">
    <h1>Composition API Component</h1>
    <p>From: {{ fromPage }}</p>
    <p>Counter: {{ counter }}</p>
    <button @click="resetCounter">resetCounter</button>
    <button @click="setCounter">set counter to 10 async</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import { ActionTypes } from '@/store/action-types'

export default defineComponent({
  name: 'HelloWorld',
  setup (props, { emit }) {
    const route = useRoute()
    const store = useStore()
    const counter = computed(() => store.state.counter)
    const doubledCounter = computed(() => store.getters.doubledCounter)
    const fromPage = ref('')

    console.log('get props: ' + props.msg)

    function resetCounter () {
      emit('reset-counter')
    }

    async function setCounter () {
      const counter = await store.dispatch(ActionTypes.ASYNC_SET_COUNTER, 10)
      console.log({ counter })
    }

    fromPage.value = (route.query.fromPage as string) || ''

    return {
      fromPage,
      counter,
      doubledCounter,
      resetCounter,
      setCounter
    }
  },
  props: {
    msg: String
  }
})
</script>
