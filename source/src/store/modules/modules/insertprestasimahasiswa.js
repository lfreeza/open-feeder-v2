/* eslint-disable camelcase */
import { insertPrestasiMahasiswa } from '@/api/insertPrestasiMahasiswa'
import { getListMahasiswa } from '@/api/getListMahasiswa'
import store from '@/store'
// import { Message } from 'element-ui'

const insertprestasimahasiswa = {
  state: {
    prestasimahasiswa: null
  },

  mutations: {
    SET_PRESTASI_MAHASISWA: (state, prestasimahasiswa) => {
      state.prestasimahasiswa = prestasimahasiswa
    },
    INSERT_PRESTASI_MAHASISWA: (state) => {
      state.prestasimahasiswa = null
    }
  },

  actions: {
    SetPrestasiMahasiswa ({ commit, state }, data) {
      commit('SET_PRESTASI_MAHASISWA', data)
      console.log('ini perkuliahan mahasiswa', state.prestasimahasiswa)
    },
    InsertPrestasiMahasiswa ({ commit, state }) {
      commit('SET_LOADING', true)
      const token = store.getters.token
      const prestasimahasiswa = state.prestasimahasiswa
      console.log('insertprestasimahasiswa', prestasimahasiswa)
      prestasimahasiswa.forEach(function (data) {
        async function getIDs () {
          try {
            const filter = `nama_mahasiswa LIKE '%${data.nama_mahasiswa}%' AND jenis_kelamin LIKE '%${data.jenis_kelamin}%' AND nim='${data.nim}'`
            const res = await getListMahasiswa(token, '', '', filter)
            data.id_mahasiswa = res.data[0].id_mahasiswa
            delete data.nama_mahasiswa
            delete data.jenis_kelamin
            delete data.nim

            const response_insert = await insertPrestasiMahasiswa(token, data)
            /* Message({
              message: 'Berhasil Input Insert Prestasi Mahasiswa',
              type: 'success',
              duration: 5 * 1000
            }) */
            console.log(response_insert.data)
            commit('INSERT_PRESTASI_MAHASISWA')
            commit('SET_LOADING', false)
            console.log('setelahinsert', state.prestasimahasiswa)
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

export default insertprestasimahasiswa
