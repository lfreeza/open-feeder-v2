import { getTahunAjaran } from '@/api/getTahunAjaran'
import store from '@/store'

const user = {
  state: {
    tahunajaran: null
  },

  mutations: {
    SET_STATUS_MAHASISWA: (state, tahunajaran) => {
      state.tahunajaran = tahunajaran
    }
  },

  actions: {
    GetTahunAjaran ({ commit, state }) {
      const token = store.getters.token
      const filter = ''
      return new Promise((resolve, reject) => {
        getTahunAjaran(token, filter).then(response => {
          console.log(response.data)
          const data = response.data
          console.log(data)
          commit('SET_STATUS_MAHASISWA', data)
          console.log('ini tahunajaran di store' + store.getters.tahunajaran)
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
