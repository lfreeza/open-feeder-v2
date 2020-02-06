import { getJenisPrestasi } from '@/api/getJenisPrestasi'
import store from '@/store'

const user = {
  state: {
    jenisprestasi: null
  },

  mutations: {
    SET_JENIS_PRESTASI: (state, jenisprestasi) => {
      state.jenisprestasi = jenisprestasi
    }
  },

  actions: {
    GetJenisPrestasi ({ commit, state }) {
      const token = store.getters.token
      const filter = ''
      return new Promise((resolve, reject) => {
        getJenisPrestasi(token, filter).then(response => {
          console.log(response.data)
          const data = response.data
          console.log(data)
          commit('SET_JENIS_PRESTASI', data)
          console.log('ini jenisprestasi di store' + store.getters.jenisprestasi)
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
