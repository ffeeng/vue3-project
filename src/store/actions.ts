import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Mutations } from './mutations'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.ASYNC_GET_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<number>;
  [ActionTypes.ASYNC_SET_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<string>;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.ASYNC_GET_COUNTER] ({ state }, payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(state.counter)
      }, payload)
    })
  },
  [ActionTypes.ASYNC_SET_COUNTER] ({ commit }, payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit(MutationTypes.SET_COUNTER, payload)
        resolve('success')
      }, 200)
    })
  }
}
