import { getListDosen } from '@/api/getListDosen'
import store from '@/store'

const user = {
  state: {
    listQueryDosen: null,
    listDosen: null,
    totalDosen: null
  },

  mutations: {
    SET_LIST_QUERY_DOSEN: (state, listQueryDosen) => {
      state.listQueryDosen = listQueryDosen
    },
    SET_LIST_DOSEN: (state, listDosen) => {
      state.listDosen = listDosen
    },
    SET_TOTAL_DOSEN: (state, totalDosen) => {
      state.totalDosen = totalDosen
    }
  },

  actions: {
    GetListDosen ({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1 ORDER BY nidn DESC'
      if (listQuery.filter) {
        filter = `nama_dosen LIKE '%${listQuery.filter}%' ORDER BY nidn DESC`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_DOSEN', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getListDosen(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_DOSEN', data)
          console.log(store.getters.listDosen)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalDosen ({ commit }, listQuery) {
      const token = store.getters.token
      const limit = 0
      let filter = '1=1 ORDER BY nidn DESC'
      if (listQuery.filter) {
        filter = `nama_dosen LIKE '%${listQuery.filter}%' ORDER BY nidn DESC`
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
        getListDosen(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_DOSEN', data)
          console.log(store.getters.totalDosen)
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
