import { getListMahasiswa } from '@/api/getListMahasiswa'
import store from '@/store'

const user = {
  state: {
    listQueryMahasiswa: null,
    listMahasiswa: null,
    totalMahasiswa: null
  },

  mutations: {
    SET_LIST_QUERY_MAHASISWA: (state, listQueryMahasiswa) => {
      state.listQueryMahasiswa = listQueryMahasiswa
    },
    SET_LIST_MAHASISWA: (state, listMahasiswa) => {
      state.listMahasiswa = listMahasiswa
    },
    SET_TOTAL_MAHASISWA: (state, totalMahasiswa) => {
      state.totalMahasiswa = totalMahasiswa
    }
  },

  actions: {
    GetListMahasiswa ({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1 ORDER BY id_periode DESC, nim'
      if (listQuery.filter) {
        filter = `nama_mahasiswa LIKE '%${listQuery.filter}%' ORDER BY id_periode DESC, nim`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_MAHASISWA', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getListMahasiswa(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_MAHASISWA', data)
          console.log(store.getters.listMahasiswa)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalMahasiswa ({ commit }, listQuery) {
      const token = store.getters.token
      const limit = 0
      let filter = '1=1 ORDER BY id_periode DESC, nim'
      if (listQuery.filter) {
        filter = `nama_mahasiswa LIKE '%${listQuery.filter}%' ORDER BY id_periode DESC, nim`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getListMahasiswa(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_MAHASISWA', data)
          console.log(store.getters.totalMahasiswa)
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
