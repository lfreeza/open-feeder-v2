import { insertDosenPengajarKelasKuliah } from '@/api/insertDosenPengajarKelasKuliah'
import { getListPenugasanDosen } from '@/api/getListPenugasanDosen'
import { getListKelasKuliah } from '@/api/getListKelasKuliah'
import { getListSubstansiKuliah } from '@/api/getListSubstansiKuliah'
import store from '@/store'
// import { Message } from 'element-ui'

const insertdosenpengajarkelaskuliah = {
  state: {
    dosenpengajarkelaskuliah: null
  },

  mutations: {
    SET_DOSEN_PENGAJAR_KELAS_KULIAH: (state, dosenpengajarkelaskuliah) => {
      state.dosenpengajarkelaskuliah = dosenpengajarkelaskuliah
    },
    INSERT_DOSEN_PENGAJAR_KELAS_KULIAH: (state) => {
      state.dosenpengajarkelaskuliah = null
    }
  },

  actions: {
    SetDosenPengajarKelasKuliah ({ commit, state }, data) {
      commit('SET_DOSEN_PENGAJAR_KELAS_KULIAH', data)
      console.log('ini dosenpengajarkelaskuliah', state.dosenpengajarkelaskuliah)
    },
    InsertDosenPengajarKelasKuliah ({ commit, state }) {
      commit('SET_LOADING', true)
      const token = store.getters.token
      const dosenpengajarkelaskuliah = state.dosenpengajarkelaskuliah
      console.log('insertdosenpengajarkelaskuliah', dosenpengajarkelaskuliah)
      async function insertdosenpengajarkelaskuliah (token, data) {
        try {
          let filter = `nama_dosen LIKE '%${data.nama_dosen}%' AND nidn LIKE '%${data.nidn}%' AND id_tahun_ajaran = '${data.id_tahun_ajaran}' AND nama_program_studi LIKE '%${data.nama_program_studi}%'`
          let res = await getListPenugasanDosen(token, '', '', filter)
          data.id_registrasi_dosen = res.data[0].id_registrasi_dosen

          delete data.nama_dosen
          delete data.nidn
          delete data.id_tahun_ajaran
          delete data.nama_program_studi

          filter = `id_semester LIKE '%${data.id_semester}%' AND nama_mata_kuliah LIKE '%${data.nama_mata_kuliah}%' AND nama_kelas_kuliah LIKE '%${data.nama_kelas_kuliah}%'`
          res = await getListKelasKuliah(token, '', '', filter)
          data.id_kelas_kuliah = res.data[0].id_kelas_kuliah

          delete (data.id_semester)
          delete (data.nama_mata_kuliah)
          delete (data.nama_kelas_kuliah)

          filter = `nama_substansi LIKE '%${data.nama_substansi}%' AND id_jenis_substansi LIKE '%${data.id_jenis_substansi}%' AND sks_mata_kuliah = '${data.sks_mata_kuliah}'`
          res = await getListSubstansiKuliah(token, '', '', filter)
          data.id_substansi = res.data[0].id_substansi

          delete (data.nama_substansi)
          delete (data.id_jenis_substansi)
          delete (data.sks_mata_kuliah)

          res = await insertDosenPengajarKelasKuliah(token, data)
          /* Message({
            message: 'Berhasil Input Dosen Pengajar Kelas Kuliah',
            type: 'success',
            duration: 5 * 1000
          }) */
          console.log(res.data)
          commit('INSERT_DOSEN_PENGAJAR_KELAS_KULIAH')
          commit('SET_LOADING', false)
        } catch (err) {
          commit('SET_LOADING', false)
          console.log(err)
        }
      }
      dosenpengajarkelaskuliah.forEach(function (data) {
        insertdosenpengajarkelaskuliah(token, data).then()
      })
    }
  }
}

export default insertdosenpengajarkelaskuliah
