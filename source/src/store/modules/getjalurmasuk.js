import { getJalurMasuk } from '@/api/getJalurMasuk'
import store from '@/store'

const user = {
  state: {
    jalurmasuk: null
  },

  mutations: {
    SET_JALUR_MASUK: (state, jalurmasuk) => {
      state.jalurmasuk = jalurmasuk
    }
  },

  actions: {
    GetJalurMasuk ({ commit, state }) {
      const token = store.getters.token
      const filter = ''
      return new Promise((resolve, reject) => {
        getJalurMasuk(token, filter).then(response => {
          console.log(response.data)
          const data = response.data
          console.log(data)
          commit('SET_JALUR_MASUK', data)
          console.log('ini jalurmasuk di store' + store.getters.jalurmasuk)
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
