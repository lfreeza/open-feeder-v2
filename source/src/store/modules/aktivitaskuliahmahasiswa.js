import { getAktivitasKuliahMahasiswa } from '@/api/getAktivitasKuliahMahasiswa'
// import { deleteAktivitasKuliahMahasiswa } from '@/api/deleteAktivitasKuliahMahasiswa'

import store from '@/store'

const user = {
  state: {
    aktivitasKuliahMahasiswa: null,
    listQueryAktivitasKuliahMahasiswa: null,
    totalAktivitasKuliahMahasiswa: null
  },

  mutations: {
    SET_LIST_QUERY_AKTIVITAS_KULIAH_MAHASISWA: (state, listQueryAktivitasKuliahMahasiswa) => {
      state.listQueryAktivitasKuliahMahasiswa = listQueryAktivitasKuliahMahasiswa
    },
    SET_AKTIVITAS_KULIAH_MAHASISWA: (state, aktivitasKuliahMahasiswa) => {
      state.aktivitasKuliahMahasiswa = aktivitasKuliahMahasiswa
    },
    SET_TOTAL_AKTIVITAS_KULIAH_MAHASISWA: (state, totalAktivitasKuliahMahasiswa) => {
      state.totalAktivitasKuliahMahasiswa = totalAktivitasKuliahMahasiswa
    }
  },

  actions: {
    GetAktivitasKuliahMahasiswa ({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1 ORDER BY id_semester DESC, nim ASC'
      if (listQuery.filter) {
        filter = `nama_mahasiswa LIKE '%${listQuery.filter}%' ORDER BY id_semester DESC, nim ASC`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_AKTIVITAS_KULIAH_MAHASISWA', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getAktivitasKuliahMahasiswa(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_AKTIVITAS_KULIAH_MAHASISWA', data)
          console.log(store.getters.aktivitasKuliahMahasiswa)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalAktivitasKuliahMahasiswa ({ commit }, listQuery) {
      const token = store.getters.token
      const limit = 0
      let filter = '1=1 ORDER BY id_semester DESC, nim ASC'
      if (listQuery.filter) {
        filter = `nama_mahasiswa LIKE '%${listQuery.filter}%' ORDER BY id_semester DESC, nim ASC`
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
        getAktivitasKuliahMahasiswa(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_AKTIVITAS_KULIAH_MAHASISWA', data)
          console.log(store.getters.totalAktivitasKuliahMahasiswa)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    }
    // DeleteAktivitasKuliahMahasiswa ({ commit }, id) {
    //   const token = store.getters.token
    //   console.log(id)
    //   return new Promise((resolve, reject) => {
    //     deleteAktivitasKuliahMahasiswa(token, id).then(response => {
    //       console.log('kelaskuliah di store', store.getters.updatekelaskuliah)
    //       console.log('sekarang mau didelete')
    //       resolve()
    //     })
    //   })
    // }
  }
}

export default user
