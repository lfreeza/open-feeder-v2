import { getSemester } from '@/api/getSemester'
import store from '@/store'

const user = {
  state: {
    semester: null
  },

  mutations: {
    SET_STATUS_MAHASISWA: (state, semester) => {
      state.semester = semester
    }
  },

  actions: {
    GetSemester ({ commit, state }) {
      const token = store.getters.token
      const filter = ``
      return new Promise((resolve, reject) => {
        getSemester(token, filter).then(response => {
          console.log(response.data)
          const data = response.data
          console.log(data)
          commit('SET_STATUS_MAHASISWA', data)
          console.log('ini semester di store' + store.getters.semester)
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
