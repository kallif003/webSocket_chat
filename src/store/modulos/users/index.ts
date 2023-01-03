import http from '@/http'
import {Module} from 'vuex'
import {Estado} from "@/store"

import { ADICIONA_USUARIO, CREATE_USERS, OBTER_USER } from "@/store/types"

import { IUser } from "@/interfaces/IUser"

export interface EstadoUser {
  users: IUser[]
}

export const user: Module<EstadoUser, Estado> = {
  mutations: {
    [ADICIONA_USUARIO] (state, user: IUser) {
      state.users.push(user)
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
  },
  getters: {
    projetos (state) {
      return state.users
    }
  }
}