import { getListKurikulum } from '@/api/getListKurikulum'

import store from '@/store'

const user = {
  state: {
    listKurikulum: null,
    listQueryKurikulum: null,
    totalKurikulum: null
  },

  mutations: {
    SET_LIST_QUERY_KURIKULUM: (state, listQueryKurikulum) => {
      state.listQueryKurikulum = listQueryKurikulum
    },
    SET_LIST_KURIKULUM: (state, listKurikulum) => {
      state.listKurikulum = listKurikulum
    },
    SET_TOTAL_KURIKULUM: (state, totalKurikulum) => {
      state.totalKurikulum = totalKurikulum
    }
  },

  actions: {
    GetListKurikulum ({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1 ORDER BY id_semester DESC'
      if (listQuery.filter) {
        filter = `nama_kurikulum LIKE '%${listQuery.filter}%' ORDER BY id_semester DESC`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_KURIKULUM', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getListKurikulum(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_KURIKULUM', data)
          console.log(store.getters.listKurikulum)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalKurikulum ({ commit }, listQuery) {
      const token = store.getters.token
      const limit = 0
      let filter = '1=1 ORDER BY id_semester DESC'
      if (listQuery.filter) {
        filter = `nama_kurikulum LIKE '%${listQuery.filter}%' ORDER BY id_semester DESC`
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
        getListKurikulum(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_KURIKULUM', data)
          console.log(store.getters.totalKurikulum)
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
