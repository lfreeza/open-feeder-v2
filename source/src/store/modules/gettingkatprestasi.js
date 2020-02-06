import { getTingkatPrestasi } from '@/api/getTingkatPrestasi'
import store from '@/store'

const user = {
  state: {
    tingkatprestasi: null
  },

  mutations: {
    SET_TINGKAT_PRESTASI: (state, tingkatprestasi) => {
      state.tingkatprestasi = tingkatprestasi
    }
  },

  actions: {
    GetTingkatPrestasi ({ commit, state }) {
      const token = store.getters.token
      const filter = ''
      return new Promise((resolve, reject) => {
        getTingkatPrestasi(token, filter).then(response => {
          console.log(response.data)
          const data = response.data
          console.log(data)
          commit('SET_TINGKAT_PRESTASI', data)
          console.log('ini tingkatprestasi di store' + store.getters.tingkatprestasi)
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
