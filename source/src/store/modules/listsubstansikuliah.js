import { getListSubstansiKuliah } from '@/api/getListSubstansiKuliah'
// import { deleteSubstansiKuliah } from '@/api/deleteSubstansiKuliah'

import store from '@/store'

const user = {
  state: {
    listSubstansiKuliah: null,
    listQuerySubstansiKuliah: null,
    totalSubstansiKuliah: null
  },

  mutations: {
    SET_LIST_QUERY_SUBSTANSI_KULIAH: (state, listQuerySubstansiKuliah) => {
      state.listQuerySubstansiKuliah = listQuerySubstansiKuliah
    },
    SET_LIST_SUBSTANSI_KULIAH: (state, listSubstansiKuliah) => {
      state.listSubstansiKuliah = listSubstansiKuliah
    },
    SET_TOTAL_SUBSTANSI_KULIAH: (state, totalSubstansiKuliah) => {
      state.totalSubstansiKuliah = totalSubstansiKuliah
    }

  },

  actions: {
    GetListSubstansiKuliah ({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1 ORDER BY nama_substansi DESC'
      if (listQuery.filter) {
        filter = `nama_substansi LIKE '%${listQuery.filter}%' ORDER BY nama_substansi DESC`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_SUBSTANSI_KULIAH', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getListSubstansiKuliah(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_SUBSTANSI_KULIAH', data)
          console.log(store.getters.listSubstansiKuliah)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalSubstansiKuliah ({ commit }, listQuery) {
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1 ORDER BY nama_substansi DESC'
      if (listQuery.filter) {
        filter = `nama_substansi LIKE '%${listQuery.filter}%' ORDER BY nama_substansi DESC`
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
        getListSubstansiKuliah(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_SUBSTANSI_KULIAH', data)
          console.log(store.getters.totalSubstansiKuliah)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    }
    // DeleteSubstansiKuliah ({ commit }, id) {
    //   const token = store.getters.token
    //   console.log(id)
    //   return new Promise((resolve, reject) => {
    //     deleteSubstansiKuliah(token, id).then(response => {
    //       console.log('substansikuliah di store', store.getters.updatesubstansikuliahmahasiswa)
    //       console.log('sekarang mau didelete')
    //       resolve()
    //     })
    //   })
    // }
  }
}

export default user
