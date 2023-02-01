import type { User } from '@/types/user.type'

export interface UserState {
   user: User | null
   loading: boolean
   error: string
}

export default {
   state: { user: null, loading: false, error: '' },
   mutations: {
      setUser(state: UserState, user: User) {
         state.user = user
      },
      setLoading(state: UserState, loading: boolean) {
         state.loading = loading
      },
      setError(state: UserState, error: string) {
         state.error = error
      },
   },
   actions: {
      async saveUser({ commit }, user: any) {
         commit('setLoading', true)
         commit('setError', '')
         console.log('saveUser', user)
         try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            commit('setUser', user)
         } catch (error) {
            commit('setError', error.message)
         }
         commit('setLoading', false)
      },
   },
}
