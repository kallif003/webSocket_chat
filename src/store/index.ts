/* eslint-disable symbol-description */
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as vueStore } from 'vuex'

import { EstadoChat, chat } from './modulos/chat'
import { EstadoUser, user } from './modulos/users'

export interface Estado{
  chat: EstadoChat
  user:  EstadoUser
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    chat: {
        chats: []
    },
    user: {
        users: []
    } 
  },

  modules:{
    chat,
    user
  }
})

export function useStore (): Store<Estado> {
  return vueStore(key)
}
