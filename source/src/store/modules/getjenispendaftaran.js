import { getJenisPendaftaran } from '@/api/getJenisPendaftaran'
import store from '@/store'

const user = {
  state: {
    jenispendaftaran: null
  },

  mutations: {
    SET_JENIS_PENDAFTARAN: (state, jenispendaftaran) => {
      state.jenispendaftaran = jenispendaftaran
    }
  },

  actions: {
    GetJenisPendaftaran ({ commit, state }) {
      const token = store.getters.token
      const filter = ''
      return new Promise((resolve, reject) => {
        getJenisPendaftaran(token, filter).then(response => {
          console.log(response.data)
          const data = response.data
          console.log(data)
          commit('SET_JENIS_PENDAFTARAN', data)
          console.log('ini jenispendaftaran di store' + store.getters.jenispendaftaran)
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
