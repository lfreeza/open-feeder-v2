import { insertMataKuliah } from '@/api/insertMataKuliah'
import { getProdi } from '@/api/getProdi'
import store from '@/store'
// import { Message } from 'element-ui'

const insertmatakuliah = {
  state: {
    matakuliah: null
  },

  mutations: {
    SET_MATAKULIAH: (state, matakuliah) => {
      state.matakuliah = matakuliah
    },
    INSERT_MATAKULIAH: (state) => {
      state.matakuliah = null
    }
  },

  actions: {
    SetMataKuliah ({ commit, state }, data) {
      commit('SET_MATAKULIAH', data)
      console.log('ini matakuliah', state.matakuliah)
    },
    InsertMataKuliah ({ commit, state }) {
      commit('SET_LOADING', true)
      const token = store.getters.token
      const matakuliah = state.matakuliah
      console.log('insertmatakuliah', matakuliah)
      matakuliah.forEach(function (data) {
        return new Promise((resolve, reject) => {
          const filter = `kode_program_studi LIKE '%${data.kode_program_studi}%' AND nama_program_studi LIKE '%${data.nama_program_studi}%' AND nama_jenjang_pendidikan LIKE '%${data.nama_jenjang_pendidikan}%'`
          getProdi(token, filter).then(response => {
            data.id_prodi = response.data[0].id_prodi
          }).then(() => {
            console.log(data)
            delete (data.kode_program_studi)
            delete (data.nama_program_studi)
            delete (data.nama_jenjang_pendidikan)
            insertMataKuliah(token, data).then(response => {
              /* Message({
                message: 'Berhasil Input Matakuliah',
                type: 'success',
                duration: 5 * 1000
              }) */
              console.log(response.data)
              commit('INSERT_MATAKULIAH')
              console.log('setelahinsert', state.matakuliah)
              commit('SET_LOADING', false)
              resolve()
            }).catch(error => {
              commit('SET_LOADING', false)
              console.log('error')
              reject(error)
            })
          }).catch(error => {
            console.log('error')
            reject(error)
          })
        })
      })
    }
  }
}

export default insertmatakuliah
