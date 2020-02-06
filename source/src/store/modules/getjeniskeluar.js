import { getJenisKeluar } from '@/api/getJenisKeluar'
import store from '@/store'

const user = {
  state: {
    jeniskeluar: null
  },

  mutations: {
    SET_STATUS_MAHASISWA: (state, jeniskeluar) => {
      state.jeniskeluar = jeniskeluar
    }
  },

  actions: {
    GetJenisKeluar ({ commit, state }) {
      const token = store.getters.token
      const filter = ''
      return new Promise((resolve, reject) => {
        getJenisKeluar(token, filter).then(response => {
          console.log(response.data)
          const data = response.data
          console.log(data)
          commit('SET_STATUS_MAHASISWA', data)
          console.log('ini jeniskeluar di store' + store.getters.jeniskeluar)
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
