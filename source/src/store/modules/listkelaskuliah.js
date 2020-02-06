import { getListKelasKuliah } from '@/api/getListKelasKuliah'

import store from '@/store'

const user = {
  state: {
    listKelasKuliah: null,
    listQueryKelasKuliah: null,
    totalKelasKuliah: null
  },

  mutations: {
    SET_LIST_QUERY_KELAS_KULIAH: (state, listQueryKelasKuliah) => {
      state.listQueryKelasKuliah = listQueryKelasKuliah
    },
    SET_LIST_KELAS_KULIAH: (state, listKelasKuliah) => {
      state.listKelasKuliah = listKelasKuliah
    },
    SET_TOTAL_KELAS_KULIAH: (state, totalKelasKuliah) => {
      state.totalKelasKuliah = totalKelasKuliah
    }
  },

  actions: {
    GetListKelasKuliah ({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1 ORDER BY id_semester DESC, kode_mata_kuliah ASC'
      if (listQuery.filter) {
        filter = `nama_mata_kuliah LIKE '%${listQuery.filter}%' ORDER BY id_semester DESC, kode_mata_kuliah ASC`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_KELAS_KULIAH', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getListKelasKuliah(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_KELAS_KULIAH', data)
          console.log(store.getters.listKelasKuliah)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalKelasKuliah ({ commit }, listQuery) {
      const token = store.getters.token
      const limit = 0
      let filter = '1=1 ORDER BY id_semester DESC, kode_mata_kuliah ASC'
      if (listQuery.filter) {
        filter = `nama_mata_kuliah LIKE '%${listQuery.filter}%' ORDER BY id_semester DESC, kode_mata_kuliah ASC`
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
        getListKelasKuliah(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_KELAS_KULIAH', data)
          console.log(store.getters.totalKelasKuliah)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    }
    // DeleteKelasKuliah ({ commit }, id) {
    //   const token = store.getters.token
    //   console.log(id)
    //   return new Promise((resolve, reject) => {
    //     deleteKelasKuliah(token, id).then(response => {
    //       console.log('kelaskuliah di store', store.getters.updatekelaskuliah)
    //       console.log('sekarang mau didelete')
    //       resolve()
    //     })
    //   })
    // }
  }
}

export default user
