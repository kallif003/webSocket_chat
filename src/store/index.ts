/* eslint-disable symbol-description */
import { IChat } from '@/interfaces/IChat'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as vueStore } from 'vuex'
import { ADICIONA_MENSAGEM, ADICIONA_USUARIO, ALTERA_MENSAGEM, CREATE_USERS, EXCLUIR_MENSAGEM, OBTER_USER } from './types'
import http from '@/http'
import { IUser } from '@/interfaces/IUser'

export interface Estado{
  chat: IChat[],
  user: IUser[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    chat: [],
    user: []
  },
  mutations: {
    [ADICIONA_MENSAGEM] (state, mensagem: IChat) {
      state.chat.push(mensagem)
    },
    [ALTERA_MENSAGEM] (state, mensagem: IChat) {
      const index = state.chat.findIndex(tar => tar.id === mensagem.id)
      state.chat[index] = mensagem
    },
    [EXCLUIR_MENSAGEM] (state, id: string) {
      state.chat = state.chat.filter(ch => ch.id !== id)
    },

    [ADICIONA_USUARIO] (state, user: IUser) {
      state.user.push(user)
    }
  },
  actions: {
    [OBTER_USER] ({ commit }, id: string) {
      return http.get(`/users/${id}`).then(res => commit(ADICIONA_USUARIO, res))
    },
    [CREATE_USERS] ({ commit }, user:IUser) {
      console.log(user)
      return http.post('/login/signup', user).then(res => commit(ADICIONA_USUARIO, res))
    }
  }
})

export function useStore (): Store<Estado> {
  return vueStore(key)
}
