/* eslint-disable camelcase */
import { insertAktivitasMahasiswa } from '@/api/insertAktivitasMahasiswa'
import { getProdi } from '@/api/getProdi'
import store from '@/store'
// import { Message } from 'element-ui'

const insertaktivitasmahasiswa = {
  state: {
    aktivitasmahasiswa: null
  },

  mutations: {
    SET_AKTIVITAS_MAHASISWA: (state, aktivitasmahasiswa) => {
      state.aktivitasmahasiswa = aktivitasmahasiswa
    },
    INSERT_AKTIVITAS_MAHASISWA: (state) => {
      state.aktivitasmahasiswa = null
    }
  },

  actions: {
    SetAktivitasMahasiswa ({ commit, state }, data) {
      commit('SET_AKTIVITAS_MAHASISWA', data)
      console.log('ini aktivitas mahasiswa', state.aktivitasmahasiswa)
    },
    InsertAktivitasMahasiswa ({ commit, state }) {
      commit('SET_LOADING', true)
      const token = store.getters.token
      const aktivitasmahasiswa = state.aktivitasmahasiswa
      console.log('insertaktivitasmahasiswa', aktivitasmahasiswa)
      aktivitasmahasiswa.forEach(function (data) {
        async function getIDs () {
          try {
            const filter_prodi = `kode_program_studi LIKE '%${data.kode_program_studi}%' AND nama_program_studi LIKE '%${data.nama_program_studi}%' AND nama_jenjang_pendidikan LIKE '%${data.nama_jenjang_pendidikan}%'`

            const response_prodi = await getProdi(token, filter_prodi)
            data.id_prodi = response_prodi.data[0].id_prodi
            console.log(data)
            delete (data.kode_program_studi)
            delete (data.nama_program_studi)
            delete (data.nama_jenjang_pendidikan)

            const response_insert = await insertAktivitasMahasiswa(token, data)
            /* Message({
              message: 'Berhasil Input Aktivitas Mahasiswa',
              type: 'success',
              duration: 5 * 1000
            }) */
            console.log(response_insert.data)
            commit('INSERT_AKTIVITAS_MAHASISWA')
            console.log('setelahinsert', state.aktivitasmahasiswa)
            commit('SET_LOADING', false)
          } catch (err) {
            commit('SET_LOADING', false)
            alert(err) // TypeError: failed to get IDs
          }
        }
        getIDs()
      })
    }
  }
}

export default insertaktivitasmahasiswa
