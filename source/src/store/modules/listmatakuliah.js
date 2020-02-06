import { getListMataKuliah } from '@/api/getListMataKuliah'
import store from '@/store'

const user = {
  state: {
    listMataKuliah: null,
    listQueryMataKuliah: null,
    totalMataKuliah: null
  },

  mutations: {
    SET_LIST_QUERY_MATA_KULIAH: (state, listQueryMataKuliah) => {
      state.listQueryMataKuliah = listQueryMataKuliah
    },
    SET_LIST_MATA_KULIAH: (state, listMataKuliah) => {
      state.listMataKuliah = listMataKuliah
    },
    SET_TOTAL_MATA_KULIAH: (state, totalMataKuliah) => {
      state.totalMataKuliah = totalMataKuliah
    }
  },

  actions: {
    GetListMataKuliah ({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1 ORDER BY kode_mata_kuliah ASC'
      if (listQuery.filter) {
        filter = `nama_mata_kuliah LIKE '%${listQuery.filter}%' ORDER BY kode_mata_kuliah ASC`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_MATA_KULIAH', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getListMataKuliah(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_MATA_KULIAH', data)
          console.log(store.getters.listMataKuliah)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalMataKuliah ({ commit }, listQuery) {
      const token = store.getters.token
      const limit = 0
      let filter = '1=1 ORDER BY kode_mata_kuliah ASC'
      if (listQuery.filter) {
        filter = `nama_mata_kuliah LIKE '%${listQuery.filter}%' ORDER BY kode_mata_kuliah ASC`
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
        getListMataKuliah(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_MATA_KULIAH', data)
          console.log(store.getters.totalMataKuliah)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    }
    // DeleteMataKuliah ({ commit }, id) {
    //   const token = store.getters.token
    //   console.log(id)
    //   return new Promise((resolve, reject) => {
    //     deleteMataKuliah(token, id).then(response => {
    //       console.log('matakuliah di store', store.getters.updatematakuliahmahasiswa)
    //       console.log('sekarang mau didelete')
    //       resolve()
    //     })
    //   })
    // }
  }
}

export default user
