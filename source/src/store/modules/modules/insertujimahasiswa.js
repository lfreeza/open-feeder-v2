import { insertUjiMahasiswa } from '@/api/insertUjiMahasiswa'
import { getListAktivitasMahasiswa } from '@/api/getListAktivitasMahasiswa'
import { getListDosen } from '@/api/getListDosen'

import store from '@/store'
// import { Message } from 'element-ui'

const insertujimahasiswa = {
  state: {
    ujimahasiswa: null
  },

  mutations: {
    SET_UJI_MAHASISWA: (state, ujimahasiswa) => {
      state.ujimahasiswa = ujimahasiswa
    },
    INSERT_UJI_MAHASISWA: (state) => {
      state.ujimahasiswa = null
    }
  },

  actions: {
    SetUjiMahasiswa ({ commit, state }, data) {
      commit('SET_UJI_MAHASISWA', data)
      console.log('ini uji mahasiswa', state.ujimahasiswa)
    },
    InsertUjiMahasiswa ({ commit, state }) {
      commit('SET_LOADING', true)
      const token = store.getters.token
      const ujimahasiswa = state.ujimahasiswa
      console.log('insertujimahasiswa', ujimahasiswa)
      async function insertujimahasiswa (token, data) {
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

          res = await insertUjiMahasiswa(token, data)
          /* Message({
            message: 'Berhasil Input Uji Mahasiswa',
            type: 'success',
            duration: 5 * 1000
          }) */
          console.log(res.data)
          commit('SET_LOADING', false)
          commit('INSERT_UJI_MAHASISWA')
        } catch (err) {
          commit('SET_LOADING', false)
          console.log(err)
        }
      }
      ujimahasiswa.forEach(function (data) {
        insertujimahasiswa(token, data).then()
      })
    }
  }
}

export default insertujimahasiswa
