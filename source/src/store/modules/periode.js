import { getPeriode } from '@/api/getPeriode'
import store from '@/store'

const user = {
  state: {
    periode: {}
  },

  mutations: {
    SET_PERIODE: (state, periode) => {
      state.periode = periode
    }
  },

  actions: {
    GetPeriode ({ commit, state }) {
      const token = store.getters.token
      return new Promise((resolve, reject) => {
        getPeriode(token).then(response => {
          console.log(response.data)
          const data = response.data
          console.log(data)
          commit('SET_PERIODE', data)
          console.log(store.getters.periode)
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
