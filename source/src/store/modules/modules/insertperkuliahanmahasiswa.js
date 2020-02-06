/* eslint-disable camelcase */
import { insertPerkuliahanMahasiswa } from '@/api/insertPerkuliahanMahasiswa'
import { getDetailListRiwayatPendidikanMahasiswa } from '@/api/getDetailListRiwayatPendidikanMahasiswa'
import store from '@/store'
// import { Message } from 'element-ui'

const insertperkuliahanmahasiswa = {
  state: {
    perkuliahanmahasiswa: null
  },

  mutations: {
    SET_PERKULIAHAN_MAHASISWA: (state, perkuliahanmahasiswa) => {
      state.perkuliahanmahasiswa = perkuliahanmahasiswa
    },
    INSERT_PERKULIAHAN_MAHASISWA: (state) => {
      state.perkuliahanmahasiswa = null
    }
  },

  actions: {
    SetPerkuliahanMahasiswa ({ commit, state }, data) {
      commit('SET_PERKULIAHAN_MAHASISWA', data)
      console.log('ini perkuliahan mahasiswa', state.perkuliahanmahasiswa)
    },
    InsertPerkuliahanMahasiswa ({ commit, state }) {
      commit('SET_LOADING', true)
      const token = store.getters.token
      const perkuliahanmahasiswa = state.perkuliahanmahasiswa
      console.log('insertperkuliahanmahasiswa', perkuliahanmahasiswa)
      perkuliahanmahasiswa.forEach(function (data) {
        async function getIDs () {
          try {
            const filter = `nama_mahasiswa LIKE '%${data.nama_mahasiswa}%' AND nim LIKE '%${data.nim}%'`

            const response_riwayat = await getDetailListRiwayatPendidikanMahasiswa(token, '', 0, filter)
            data.id_registrasi_mahasiswa = response_riwayat.data[0].id_registrasi_mahasiswa
            console.log(data)
            delete (data.nama_mahasiswa)
            delete (data.nim)

            const response_insert = await insertPerkuliahanMahasiswa(token, data)
            /* Message({
              message: 'Berhasil Input Aktivitas Kuliah Mahasiswa',
              type: 'success',
              duration: 5 * 1000
            }) */
            console.log(response_insert.data)
            commit('INSERT_PERKULIAHAN_MAHASISWA')
            commit('SET_LOADING', false)
            console.log('setelahinsert', state.perkuliahanmahasiswa)
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

export default insertperkuliahanmahasiswa
