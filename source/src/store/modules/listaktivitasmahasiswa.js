import { getListAktivitasMahasiswa } from '@/api/getListAktivitasMahasiswa'
// import { deleteAktivitasMahasiswa } from '@/api/deleteAktivitasMahasiswa'

import store from '@/store'

const user = {
  state: {
    listAktivitasMahasiswa: null,
    listQueryAktivitasMahasiswa: null,
    totalAktivitasMahasiswa: null
  },

  mutations: {
    SET_LIST_QUERY_AKTIVITAS_MAHASISWA: (state, listQueryAktivitasMahasiswa) => {
      state.listQueryAktivitasMahasiswa = listQueryAktivitasMahasiswa
    },
    SET_LIST_AKTIVITAS_MAHASISWA: (state, listAktivitasMahasiswa) => {
      state.listAktivitasMahasiswa = listAktivitasMahasiswa
    },
    SET_TOTAL_AKTIVITAS_MAHASISWA: (state, totalAktivitasMahasiswa) => {
      state.totalAktivitasMahasiswa = totalAktivitasMahasiswa
    }
  },

  actions: {
    GetListAktivitasMahasiswa ({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1 ORDER BY id_semester DESC'
      if (listQuery.filter) {
        filter = `judul LIKE '%${listQuery.filter}%' ORDER BY id_semester DESC`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_AKTIVITAS_MAHASISWA', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getListAktivitasMahasiswa(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_AKTIVITAS_MAHASISWA', data)
          console.log(store.getters.listAktivitasMahasiswa)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalAktivitasMahasiswa ({ commit }, listQuery) {
      const token = store.getters.token
      const limit = 0
      let filter = '1=1 ORDER BY id_semester DESC'
      if (listQuery.filter) {
        filter = `judul LIKE '%${listQuery.filter}%' ORDER BY id_semester DESC`
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
        getListAktivitasMahasiswa(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_AKTIVITAS_MAHASISWA', data)
          console.log(store.getters.totalAktivitasMahasiswa)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    }
    // DeleteAktivitasMahasiswa ({ commit }, id) {
    //   const token = store.getters.token
    //   console.log(id)
    //   return new Promise((resolve, reject) => {
    //     deleteAktivitasMahasiswa(token, id).then(response => {
    //       console.log('kelaskuliah di store', store.getters.updatekelaskuliah)
    //       console.log('sekarang mau didelete')
    //       resolve()
    //     })
    //   })
    // }
  }
}

export default user
