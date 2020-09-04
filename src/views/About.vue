<template>
  <div>
    <h1>Options API Component</h1>
    <p>Counter: {{ counter }}, doubled counter: {{ doubledCounter }}</p>
    <input v-model.number="counter" type="text" />
    <button type="button" @click="resetCounter">Reset counter</button>
    <button @click="getCounter">get counter async</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MutationTypes } from '@/store/mutation-types'
import { ActionTypes } from '@/store/action-types'
export default defineComponent({
  name: 'About',
  computed: {
    counter: {
      get () {
        const a = '234' + 234
        return this.$store.state.counter
      },
      set (value: number) {
        this.$store.commit(MutationTypes.SET_COUNTER, value)
      }
    },
    doubledCounter () {
      return this.$store.getters.doubledCounter
    }
  },
  methods: {
    resetCounter () {
      this.$store.commit(MutationTypes.SET_COUNTER, 0)
    },
    async getCounter () {
      const counter = await this.$store.dispatch(ActionTypes.ASYNC_GET_COUNTER, 200)
      console.log({ counter })
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/color";

input {
  margin-right: 10px;
  color: $font-base-color;
}
</style>
