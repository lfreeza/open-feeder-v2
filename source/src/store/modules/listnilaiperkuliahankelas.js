import { getListNilaiPerkuliahanKelas } from '@/api/getListNilaiPerkuliahanKelas'
// import { deleteNilaiPerkuliahanKelas } from '@/api/deleteNilaiPerkuliahanKelas'

import store from '@/store'

const user = {
  state: {
    listNilaiPerkuliahanKelas: null,
    listQueryNilaiPerkuliahanKelas: null,
    totalNilaiPerkuliahanKelas: null
  },

  mutations: {
    SET_LIST_QUERY_NILAI_PERKULIAHAN_KELAS: (state, listQueryNilaiPerkuliahanKelas) => {
      state.listQueryNilaiPerkuliahanKelas = listQueryNilaiPerkuliahanKelas
    },
    SET_LIST_NILAI_PERKULIAHAN_KELAS: (state, listNilaiPerkuliahanKelas) => {
      state.listNilaiPerkuliahanKelas = listNilaiPerkuliahanKelas
    },
    SET_TOTAL_NILAI_PERKULIAHAN_KELAS: (state, totalNilaiPerkuliahanKelas) => {
      state.totalNilaiPerkuliahanKelas = totalNilaiPerkuliahanKelas
    }
  },

  actions: {
    GetListNilaiPerkuliahanKelas ({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1 ORDER BY kode_mata_kuliah DESC'
      if (listQuery.filter) {
        filter = `nama_mata_kuliah LIKE '%${listQuery.filter}%' ORDER BY kode_mata_kuliah DESC`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_NILAI_PERKULIAHAN_KELAS', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getListNilaiPerkuliahanKelas(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_NILAI_PERKULIAHAN_KELAS', data)
          console.log(store.getters.listNilaiPerkuliahanKelas)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalNilaiPerkuliahanKelas ({ commit }, listQuery) {
      const token = store.getters.token
      const limit = 0
      let filter = '1=1 ORDER BY kode_mata_kuliah DESC'
      if (listQuery.filter) {
        filter = `nama_mata_kuliah LIKE '%${listQuery.filter}%' ORDER BY kode_mata_kuliah DESC`
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
        getListNilaiPerkuliahanKelas(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_NILAI_PERKULIAHAN_KELAS', data)
          console.log(store.getters.totalNilaiPerkuliahanKelas)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    }
    // DeleteNilaiPerkuliahanKelas({ commit }, id) {
    //   const token = store.getters.token
    //   console.log(id)
    //   return new Promise((resolve, reject) => {
    //     deleteNilaiPerkuliahanKelas(token, id).then(response => {
    //       console.log('kelaskuliah di store', store.getters.updatekelaskuliah)
    //       console.log('sekarang mau didelete')
    //       resolve()
    //     })
    //   })
    // }
  }
}

export default user
