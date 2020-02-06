import { getStatusMahasiswa } from '@/api/getStatusMahasiswa'
import store from '@/store'

const user = {
  state: {
    statusmahasiswa: null
  },

  mutations: {
    SET_STATUS_MAHASISWA: (state, statusmahasiswa) => {
      state.statusmahasiswa = statusmahasiswa
    }
  },

  actions: {
    GetStatusMahasiswa ({ commit, state }) {
      const token = store.getters.token
      const filter = ''
      return new Promise((resolve, reject) => {
        getStatusMahasiswa(token, filter).then(response => {
          console.log(response.data)
          const data = response.data
          console.log(data)
          commit('SET_STATUS_MAHASISWA', data)
          console.log('ini statusmahasiswa di store' + store.getters.statusmahasiswa)
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
