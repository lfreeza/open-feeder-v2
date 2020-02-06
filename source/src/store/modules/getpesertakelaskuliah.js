import { getPesertaKelasKuliah } from '@/api/getPesertaKelasKuliah'
import { deletePesertaKelasKuliah } from '@/api/deletePesertaKelasKuliah'
import store from '@/store'

const user = {
  state: {
    pesertakelaskuliah: null,
    listQueryPesertaKelasKuliah: null,
    totalPesertaKelasKuliah: null
  },

  mutations: {
    SET_LIST_QUERY_PESERTA_KELAS_KULIAH: (state, listQueryPesertaKelasKuliah) => {
      state.listQueryPesertaKelasKuliah = listQueryPesertaKelasKuliah
    },
    GET_PESERTA_KELAS_KULIAH: (state, pesertakelaskuliah) => {
      state.pesertakelaskuliah = pesertakelaskuliah
    },
    SET_TOTAL_PESERTA_KELAS_KULIAH: (state, totalPesertaKelasKuliah) => {
      state.totalPesertaKelasKuliah = totalPesertaKelasKuliah
    }
  },

  actions: {
    GetPesertaKelasKuliah ({ commit }, listQuery) {
      const token = store.getters.token
      console.log(listQuery.id)
      let filter = `id_kelas_kuliah = '${listQuery.id}'`
      if (listQuery.id_prodi) {
        filter = filter + ` AND nama_program_studi = '${listQuery.nama_program_studi}'`
      }
      if (listQuery.filter) {
        filter = filter + ` AND nama_mahasiswa LIKE '%${listQuery.filter}%'`
      }
      const limit = listQuery.limit
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_PESERTA_KELAS_KULIAH', listQuery)
      return new Promise((resolve, reject) => {
        getPesertaKelasKuliah(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          console.log('ini data peserta', data)
          commit('GET_PESERTA_KELAS_KULIAH', data)
          console.log('pesertakelaskuliah di store', store.getters.pesertaKelasKuliah)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalPesertaKelasKuliah ({ commit }, listQuery) {
      const token = store.getters.token
      const limit = 0
      const filter = `id_kelas_kuliah = '${listQuery.id}'`
      let offset = null
      console.log(listQuery)
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getPesertaKelasKuliah(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_PESERTA_KELAS_KULIAH', data)
          console.log(store.getters.totalPesertaKelasKuliah)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeletePesertaKelasKuliah ({ commit }, data) {
      const token = store.getters.token
      return new Promise((resolve, reject) => {
        deletePesertaKelasKuliah(token, data.id_kelas_kuliah, data.id_registrasi_mahasiswa).then(response => {
          console.log(response)
          resolve()
        })
      })
    }
    // UpdateKelasKuliah ({ commit }) {
    //   const token = store.getters.token
    //   const kelaskuliah = store.getters.pesertakelaskuliah[0]
    //   return new Promise((resolve, reject) => {
    //     updateKelasKuliah(token, kelaskuliah).then(response => {
    //       console.log(response.data)
    //       console.log('kelaskuliah pesertaan di store', store.getters.pesertakelaskuliah)
    //     }).then(() => {
    //       const listQuery = store.getters.listQueryKelasKuliah
    //       // console.log(listQuery)
    //       const limit = listQuery.limit
    //       const offset = listQuery.offset
    //       getListKelasKuliah(token, limit, offset).then(response => {
    //         console.log(response.data)
    //         const data = response.data
    //         commit('SET_LIST_KELAS_KULIAH', data)
    //         /* Message({
    //           message: 'Berhasil Update Kelas Kuliah',
    //           type: 'success',
    //           duration: 5 * 1000
    //         })
    //         router.push('/kelaskuliah/listkelaskuliah')
    //         resolve()
    //       }).catch(error => {
    //         console.log('error')
    //         reject(error)
    //       })
    //     }).catch(error => {
    //       console.log('error')
    //       reject(error)
    //     })
    //   })
    // }
  }
}

export default user
