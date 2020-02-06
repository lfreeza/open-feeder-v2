import { getListPenugasanSemuaDosen } from '@/api/getListPenugasanSemuaDosen'
import store from '@/store'

const user = {
  state: {
    listQueryPenugasanSemuaDosen: null,
    listPenugasanSemuaDosen: null,
    totalPenugasanSemuaDosen: null
  },

  mutations: {
    SET_LIST_QUERY_PENUGASAN_SEMUA_DOSEN: (state, listQueryPenugasanSemuaDosen) => {
      state.listQueryPenugasanSemuaDosen = listQueryPenugasanSemuaDosen
    },
    SET_LIST_PENUGASAN_SEMUA_DOSEN: (state, listPenugasanSemuaDosen) => {
      state.listPenugasanSemuaDosen = listPenugasanSemuaDosen
    },
    SET_TOTAL_PENUGASAN_SEMUA_DOSEN: (state, totalPenugasanSemuaDosen) => {
      state.totalPenugasanSemuaDosen = totalPenugasanSemuaDosen
    }
  },

  actions: {
    GetListPenugasanSemuaDosen ({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1 ORDER BY id_tahun_ajaran DESC'
      if (listQuery.filter) {
        filter = `nama_dosen LIKE '%${listQuery.filter}%' ORDER BY id_tahun_ajaran DESC`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_PENUGASAN_SEMUA_DOSEN', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getListPenugasanSemuaDosen(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_PENUGASAN_SEMUA_DOSEN', data)
          console.log(store.getters.listPenugasanSemuaDosen)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalPenugasanSemuaDosen ({ commit }, listQuery) {
      const token = store.getters.token
      const limit = 0
      let filter = '1=1 ORDER BY id_tahun_ajaran DESC'
      if (listQuery.filter) {
        filter = `nama_dosen LIKE '%${listQuery.filter}%' ORDER BY id_tahun_ajaran DESC`
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
        getListPenugasanSemuaDosen(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_PENUGASAN_SEMUA_DOSEN', data)
          console.log(store.getters.totalPenugasanSemuaDosen)
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
