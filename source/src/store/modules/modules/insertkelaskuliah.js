/* eslint-disable camelcase */
import { insertKelasKuliah } from '@/api/insertKelasKuliah'
import { getProdi } from '@/api/getProdi'
import { getListMataKuliah } from '@/api/getListMataKuliah'
import store from '@/store'
// import { Message } from 'element-ui'

const insertkelaskuliah = {
  state: {
    kelaskuliah: null
  },

  mutations: {
    SET_KELAS_KULIAH: (state, kelaskuliah) => {
      state.kelaskuliah = kelaskuliah
    },
    INSERT_KELAS_KULIAH: (state) => {
      state.kelaskuliah = null
    }
  },

  actions: {
    SetKelasKuliah ({ commit, state }, data) {
      commit('SET_KELAS_KULIAH', data)
      console.log('ini kelas kuliah', state.kelaskuliah)
    },
    InsertKelasKuliah ({ commit, state }) {
      commit('SET_LOADING', true)
      const token = store.getters.token
      const kelaskuliah = state.kelaskuliah
      console.log('insertkelaskuliah', kelaskuliah)
      kelaskuliah.forEach(function (data) {
        async function getIDs () {
          try {
            commit('SET_LOADING', true)
            const filter_prodi = `kode_program_studi LIKE '%${data.kode_program_studi}%' AND nama_program_studi LIKE '%${data.nama_program_studi}%' AND nama_jenjang_pendidikan LIKE '%${data.nama_jenjang_pendidikan}%'`

            const response_prodi = await getProdi(token, filter_prodi)
            data.id_prodi = response_prodi.data[0].id_prodi
            console.log(data)
            delete (data.kode_program_studi)
            delete (data.nama_program_studi)
            delete (data.nama_jenjang_pendidikan)

            const filter_matkul = `kode_mata_kuliah LIKE '%${data.kode_mata_kuliah}%' AND nama_mata_kuliah LIKE '%${data.nama_mata_kuliah}%' AND sks_mata_kuliah = '${data.sks_mata_kuliah}'`

            const response_matkul = await getListMataKuliah(token, '', 0, filter_matkul)
            data.id_matkul = response_matkul.data[0].id_matkul
            delete (data.kode_mata_kuliah)
            delete (data.nama_mata_kuliah)
            delete (data.sks_mata_kuliah)

            const response_insert = await insertKelasKuliah(token, data)
            /* Message({
              message: 'Berhasil Input Kelas Kuliah',
              type: 'success',
              duration: 5 * 1000
            }) */
            console.log(response_insert.data)
            commit('INSERT_KELAS_KULIAH')
            console.log('setelahinsert', state.kelaskuliah)
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

export default insertkelaskuliah
