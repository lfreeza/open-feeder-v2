import { getListMahasiswaLulusDO } from '@/api/getListMahasiswaLulusDO'
// import { deleteMahasiswaLulusDO } from '@/api/deleteMahasiswaLulusDO'

import store from '@/store'

const user = {
  state: {
    listMahasiswaLulusDO: null,
    listQueryMahasiswaLulusDO: null,
    totalMahasiswaLulusDO: null
  },

  mutations: {
    SET_LIST_QUERY_MAHASISWA_LULUS_DO: (state, listQueryMahasiswaLulusDO) => {
      state.listQueryMahasiswaLulusDO = listQueryMahasiswaLulusDO
    },
    SET_LIST_MAHASISWA_LULUS_DO: (state, listMahasiswaLulusDO) => {
      state.listMahasiswaLulusDO = listMahasiswaLulusDO
    },
    SET_TOTAL_MAHASISWA_LULUS_DO: (state, totalMahasiswaLulusDO) => {
      state.totalMahasiswaLulusDO = totalMahasiswaLulusDO
    }
  },

  actions: {
    GetListMahasiswaLulusDO ({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1 ORDER BY angkatan DESC, nim ASC, nama_mahasiswa'
      if (listQuery.filter) {
        filter = `nama_mahasiswa LIKE '%${listQuery.filter}%' ORDER BY angkatan DESC, nim ASC, nama_mahasiswa`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_MAHASISWA_LULUS_DO', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        // harusnya list tapi ganti detail untuk dapat data yang dibutuhkan, cek API
        getListMahasiswaLulusDO(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_MAHASISWA_LULUS_DO', data)
          console.log(store.getters.listMahasiswaLulusDO)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalMahasiswaLulusDO ({ commit }, listQuery) {
      const token = store.getters.token
      const limit = 0
      let filter = '1=1 ORDER BY angkatan DESC, nim ASC, nama_mahasiswa'
      if (listQuery.filter) {
        filter = `nama_mahasiswa LIKE '%${listQuery.filter}%' ORDER BY angkatan DESC, nim ASC, nama_mahasiswa`
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
        getListMahasiswaLulusDO(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_MAHASISWA_LULUS_DO', data)
          console.log(store.getters.totalMahasiswaLulusDO)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    }
    // DeleteMahasiswaLulusDO({ commit }, id) {
    //   const token = store.getters.token
    //   console.log(id)
    //   return new Promise((resolve, reject) => {
    //     deleteMahasiswaLulusDO(token, id).then(response => {
    //       console.log('kelaskuliah di store', store.getters.updatekelaskuliah)
    //       console.log('sekarang mau didelete')
    //       resolve()
    //     })
    //   })
    // }
  }
}

export default user
