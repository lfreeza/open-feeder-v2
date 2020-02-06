import { insertAnggotaAktivitasMahasiswa } from '@/api/insertAnggotaAktivitasMahasiswa'
import { getListAktivitasMahasiswa } from '@/api/getListAktivitasMahasiswa'
import { getListRiwayatPendidikanMahasiswa } from '@/api/getListRiwayatPendidikanMahasiswa'

import store from '@/store'
// import { Message } from 'element-ui'

const insertanggotaaktivitasmahasiswa = {
  state: {
    anggotaaktivitasmahasiswa: null
  },

  mutations: {
    SET_ANGGOTA_AKTIVITAS_MAHASISWA: (state, anggotaaktivitasmahasiswa) => {
      state.anggotaaktivitasmahasiswa = anggotaaktivitasmahasiswa
    },
    INSERT_ANGGOTA_AKTIVITAS_MAHASISWA: (state) => {
      state.anggotaaktivitasmahasiswa = null
    }
  },

  actions: {
    SetAnggotaAktivitasMahasiswa ({ commit, state }, data) {
      commit('SET_ANGGOTA_AKTIVITAS_MAHASISWA', data)
      console.log('ini anggota aktivitas mahasiswa', state.anggotaaktivitasmahasiswa)
    },
    InsertAnggotaAktivitasMahasiswa ({ commit, state }) {
      commit('SET_LOADING', true)
      const token = store.getters.token
      const anggotaaktivitasmahasiswa = state.anggotaaktivitasmahasiswa
      console.log('insertanggotaaktivitasmahasiswa', anggotaaktivitasmahasiswa)
      async function insertanggotaaktivitasmahasiswa (token, data) {
        try {
          let filter = `nama_jenis_aktivitas LIKE '%${data.nama_jenis_aktivitas}%' AND id_semester LIKE '%${data.id_semester}%' AND judul LIKE '%${data.judul}%'`
          let res = await getListAktivitasMahasiswa(token, '', '', filter)
          data.id_aktivitas = res.data[0].id_aktivitas

          delete data.nama_jenis_aktivitas
          delete data.id_semester
          delete data.judul

          filter = `nama_mahasiswa LIKE '%${data.nama_mahasiswa}%' AND nim LIKE '%${data.nim}%'`
          res = await getListRiwayatPendidikanMahasiswa(token, '', '', filter)
          data.id_registrasi_mahasiswa = res.data[0].id_registrasi_mahasiswa

          delete (data.nama_mahasiswa)
          delete (data.nim)

          res = await insertAnggotaAktivitasMahasiswa(token, data)
          /* Message({
            message: 'Berhasil Input Anggota Aktivitas Mahasiswa',
            type: 'success',
            duration: 5 * 1000
          }) */
          console.log(res.data)
          commit('INSERT_ANGGOTA_AKTIVITAS_MAHASISWA')
          commit('SET_LOADING', false)
        } catch (err) {
          commit('SET_LOADING', false)
          console.log(err)
        }
      }
      anggotaaktivitasmahasiswa.forEach(function (data) {
        insertanggotaaktivitasmahasiswa(token, data).then()
      })
    }
  }
}

export default insertanggotaaktivitasmahasiswa
