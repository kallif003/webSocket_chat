import {Estado} from "@/store"

import { IChat } from '@/interfaces/IChat'
import {Module} from 'vuex'
import { ADICIONA_MENSAGEM, ALTERA_MENSAGEM, EXCLUIR_MENSAGEM } from "@/store/types"

export interface EstadoChat {
  chats: IChat[]
}

export const chat: Module<EstadoChat, Estado> = {
  mutations: {
    [ADICIONA_MENSAGEM] (state, mensagem: IChat) {
      state.chats.push(mensagem)
    },
    [ALTERA_MENSAGEM] (state, mensagem: IChat) {
      const index = state.chats.findIndex(tar => tar.id === mensagem.id)
      state.chats[index] = mensagem
    },
    [EXCLUIR_MENSAGEM] (state, id: string) {
      state.chats = state.chats.filter(ch => ch.id !== id)
    },
  },

  getters: {
    projetos (state) {
      return state.chats
    }
  }
}