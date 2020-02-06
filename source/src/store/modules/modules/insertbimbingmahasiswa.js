import { insertBimbingMahasiswa } from '@/api/insertBimbingMahasiswa'
import { getListAktivitasMahasiswa } from '@/api/getListAktivitasMahasiswa'
import { getListDosen } from '@/api/getListDosen'

import store from '@/store'
// import { Message } from 'element-ui'

const insertbimbingmahasiswa = {
  state: {
    bimbingmahasiswa: null
  },

  mutations: {
    SET_BIMBING_MAHASISWA: (state, bimbingmahasiswa) => {
      state.bimbingmahasiswa = bimbingmahasiswa
    },
    INSERT_BIMBING_MAHASISWA: (state) => {
      state.bimbingmahasiswa = null
    }
  },

  actions: {
    SetBimbingMahasiswa ({ commit, state }, data) {
      commit('SET_BIMBING_MAHASISWA', data)
      console.log('ini bimbing mahasiswa', state.bimbingmahasiswa)
    },
    InsertBimbingMahasiswa ({ commit, state }) {
      commit('SET_LOADING', true)
      const token = store.getters.token
      const bimbingmahasiswa = state.bimbingmahasiswa
      console.log('insertbimbingmahasiswa', bimbingmahasiswa)
      async function insertbimbingmahasiswa (token, data) {
        try {
          let filter = `nama_jenis_aktivitas LIKE '%${data.nama_jenis_aktivitas}%' AND id_semester LIKE '%${data.id_semester}%' AND judul LIKE '%${data.judul}%'`
          let res = await getListAktivitasMahasiswa(token, '', '', filter)
          data.id_aktivitas = res.data[0].id_aktivitas

          delete data.nama_jenis_aktivitas
          delete data.id_semester
          delete data.judul

          filter = `nama_dosen LIKE '%${data.nama_dosen}%' AND nidn LIKE '%${data.nidn}%' AND nip LIKE '%${data.nip}%'`
          res = await getListDosen(token, '', '', filter)
          data.id_dosen = res.data[0].id_dosen

          delete (data.nama_dosen)
          delete (data.nidn)
          delete (data.nip)

          res = await insertBimbingMahasiswa(token, data)
          /* Message({
            message: 'Berhasil Input Bimbing Mahasiswa',
            type: 'success',
            duration: 5 * 1000
          }) */
          console.log(res.data)
          commit('INSERT_BIMBING_MAHASISWA')
          commit('SET_LOADING', false)
        } catch (err) {
          commit('SET_LOADING', false)
          console.log(err)
        }
      }
      bimbingmahasiswa.forEach(function (data) {
        insertbimbingmahasiswa(token, data).then()
      })
    }
  }
}

export default insertbimbingmahasiswa
