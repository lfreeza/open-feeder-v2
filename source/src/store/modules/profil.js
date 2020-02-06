import { getProfilPT } from '@/api/getProfilPT'
import store from '@/store'

const user = {
  state: {
    profilPT: null
  },

  mutations: {
    SET_PROFIL_PT: (state, profilPT) => {
      state.profilPT = profilPT
    }
  },

  actions: {
    GetProfilPT ({ commit, state }) {
      const token = store.getters.token
      return new Promise((resolve, reject) => {
        getProfilPT(token, '').then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_PROFIL_PT', data)
          console.log('ini profil di store' + data)
          console.log(store.getters.profilPT)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    }
  }
}

export default user
