import type { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

import type { UserState } from './modules/user.module'
import userState from './modules/user.module'

interface RootState {
   user: UserState
}

const store = createStore<RootState>({
   state: {
      user: userState.state,
   },
   modules: {
      user: userState,
   },
})

export const key: InjectionKey<Store<RootState>> = Symbol()

export function useStore() {
   return baseUseStore(key)
}

export default store
