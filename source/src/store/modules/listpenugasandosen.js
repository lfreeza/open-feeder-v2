import { getListPenugasanDosen } from '@/api/getListPenugasanDosen'
import store from '@/store'

const user = {
  state: {
    listPenugasanDosen: null,
    listQueryPenugasanDosen: null,
    totalPenugasanDosen: null
  },

  mutations: {
    SET_LIST_QUERY_PENUGASAN_DOSEN: (state, listQueryKurikulum) => {
      state.listQueryKurikulum = listQueryKurikulum
    },
    SET_LIST_PENUGASAN_DOSEN: (state, listKurikulum) => {
      state.listKurikulum = listKurikulum
    },
    SET_TOTAL_PENUGASAN_DOSEN: (state, totalKurikulum) => {
      state.totalKurikulum = totalKurikulum
    }
  },

  actions: {
    GetListPenugasanDosen ({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1 ORDER BY id_semester DESC'
      if (listQuery.filter) {
        filter = `judul LIKE '%${listQuery.filter}%' ORDER BY semester_mulai_berlaku DESC`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_PENUGASAN_DOSEN', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getListPenugasanDosen(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_PENUGASAN_DOSEN', data)
          console.log(store.getters.listPenugasanDosen)
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
