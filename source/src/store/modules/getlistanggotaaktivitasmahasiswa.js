import { getListAnggotaAktivitasMahasiswa } from '@/api/getListAnggotaAktivitasMahasiswa'
import { deleteAnggotaAktivitasMahasiswa } from '@/api/deleteAnggotaAktivitasMahasiswa'
import store from '@/store'

const user = {
  state: {
    listAnggotaAktivitasMahasiswa: null,
    listQueryAnggotaAktivitasMahasiswa: null,
    totalAnggotaAktivitasMahasiswa: null
  },

  mutations: {
    SET_LIST_QUERY_ANGGOTA_AKTIVITAS_MAHASISWA: (state, listQueryAnggotaAktivitasMahasiswa) => {
      state.listQueryAnggotaAktivitasMahasiswa = listQueryAnggotaAktivitasMahasiswa
    },
    GET_LIST_ANGGOTA_AKTIVITAS_MAHASISWA: (state, listAnggotaAktivitasMahasiswa) => {
      state.listAnggotaAktivitasMahasiswa = listAnggotaAktivitasMahasiswa
    },
    SET_TOTAL_ANGGOTA_AKTIVITAS_MAHASISWA: (state, totalAnggotaAktivitasMahasiswa) => {
      state.totalAnggotaAktivitasMahasiswa = totalAnggotaAktivitasMahasiswa
    }
  },

  actions: {
    GetListAnggotaAktivitasMahasiswa ({ commit, state }, listQuery) {
      const token = store.getters.token
      console.log(listQuery.id)
      let filter = `id_aktivitas = '${listQuery.id}'`
      if (listQuery.id_aktivitas) {
        filter = filter + ` AND judul = '${listQuery.judul}'`
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
      commit('SET_LIST_QUERY_ANGGOTA_AKTIVITAS_MAHASISWA', listQuery)
      return new Promise((resolve, reject) => {
        getListAnggotaAktivitasMahasiswa(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          console.log('ini data anggota aktivitas', data)
          commit('GET_LIST_ANGGOTA_AKTIVITAS_MAHASISWA', data)
          console.log('anggotaaktivitas di store', store.getters.listAnggotaAktivitasMahasiswa)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalAnggotaAktivitasMahasiswa ({ commit }, listQuery) {
      const token = store.getters.token
      const limit = 0
      const filter = `id_anggota = '${listQuery.id}'`
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
        getListAnggotaAktivitasMahasiswa(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_ANGGOTA_AKTIVITAS_MAHASISWA', data)
          console.log(store.getters.totalAnggotaAktivitasMahasiswa)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeleteAnggotaAktivitasMahasiswa ({ commit }, data) {
      const token = store.getters.token
      return new Promise((resolve, reject) => {
        deleteAnggotaAktivitasMahasiswa(token, data.id_anggota).then(response => {
          console.log(response)
          resolve()
        })
      })
    }
  }
}

export default user
