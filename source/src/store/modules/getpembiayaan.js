import { getPembiayaan } from '@/api/getPembiayaan'
import store from '@/store'

const user = {
  state: {
    pembiayaan: null
  },

  mutations: {
    SET_PEMBIAYAAN: (state, pembiayaan) => {
      state.pembiayaan = pembiayaan
    }
  },

  actions: {
    GetPembiayaan ({ commit, state }) {
      const token = store.getters.token
      const filter = ''
      return new Promise((resolve, reject) => {
        getPembiayaan(token, filter).then(response => {
          console.log(response.data)
          const data = response.data
          console.log(data)
          commit('SET_PEMBIAYAAN', data)
          console.log('ini pembiayaan di store' + store.getters.pembiayaan)
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
