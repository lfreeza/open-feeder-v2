import { getJenisAktivitasMahasiswa } from '@/api/getJenisAktivitasMahasiswa'
import store from '@/store'

const user = {
  state: {
    jenisaktivitasmahasiswa: null
  },

  mutations: {
    SET_STATUS_MAHASISWA: (state, jenisaktivitasmahasiswa) => {
      state.jenisaktivitasmahasiswa = jenisaktivitasmahasiswa
    }
  },

  actions: {
    GetJenisAktivitasMahasiswa ({ commit, state }) {
      const token = store.getters.token
      const filter = ''
      return new Promise((resolve, reject) => {
        getJenisAktivitasMahasiswa(token, filter).then(response => {
          console.log(response.data)
          const data = response.data
          console.log(data)
          commit('SET_STATUS_MAHASISWA', data)
          console.log('ini jenisaktivitasmahasiswa di store' + store.getters.jenisaktivitasmahasiswa)
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
