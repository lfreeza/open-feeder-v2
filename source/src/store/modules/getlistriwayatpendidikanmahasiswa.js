/* eslint-disable camelcase */
import Vue from 'vue'
import { getListRiwayatPendidikanMahasiswa } from '@/api/getListRiwayatPendidikanMahasiswa'
import { deleteRiwayatPendidikanMahasiswa } from '@/api/deleteRiwayatPendidikanMahasiswa'
import { getListPrestasiMahasiswa } from '@/api/getListPrestasiMahasiswa'
import { updateRiwayatPendidikanMahasiswa } from '@/api/updateRiwayatPendidikanMahasiswa'
// import { Message } from 'element-ui'
import router from '@/router'
import store from '@/store'

const user = {
  state: {
    listriwayatpendidikanmahasiswa: null
  },

  mutations: {
    GET_LIST_RIWAYAT_PENDIDIKAN_MAHASISWA: (state, listriwayatpendidikanmahasiswa) => {
      Vue.set(state, 'listriwayatpendidikanmahasiswa', listriwayatpendidikanmahasiswa)
    },
    SET_LIST_RIWAYAT_PENDIDIKAN_MAHASISWA: (state, listriwayatpendidikanmahasiswa) => {
      state.listriwayatpendidikanmahasiswa = listriwayatpendidikanmahasiswa
    }
  },

  actions: {
    GetListRiwayatPendidikanMahasiswa ({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        getListRiwayatPendidikanMahasiswa(token, id).then(response => {
          console.log(response.data)
          const data = response.data
          console.log('ini data riwayat pendidikan mahasiswa', data)
          commit('GET_LIST_RIWAYAT_PENDIDIKAN_MAHASISWA', data)
          console.log('listriwayatpendidikanmahasiswa di store', store.getters.listriwayatpendidikanmahasiswa)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetListRiwayatPendidikanMahasiswaPrestasi ({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      async function getIDs () {
        try {
          const response_riwayat = await getListRiwayatPendidikanMahasiswa(token, id)
          commit('GET_LIST_RIWAYAT_PENDIDIKAN_MAHASISWA', response_riwayat.data)
          console.log('getlistriwayatpendidikan done')
          const response_prestasi = await getListPrestasiMahasiswa(token, id)
          commit('GET_LIST_PRESTASI_MAHASISWA', response_prestasi.data)
        } catch (err) {
          console.log(err) // TypeError: failed to get IDs
        }
      }
      getIDs()
    },
    UpdateRiwayatPendidikanMahasiswa ({ commit }) {
      const token = store.getters.token
      const riwayatpendidikan = store.getters.listriwayatpendidikanmahasiswa[0]
      return new Promise((resolve, reject) => {
        updateRiwayatPendidikanMahasiswa(token, riwayatpendidikan).then(response => {
          console.log(response.data)
          console.log('riwayatpendidikan updatean di store', store.getters.listriwayatpendidikanmahasiswa)
        }).then(() => {
          const listQuery = store.getters.listriwayatpendidikanmahasiswa
          const id_mahasiswa = listQuery[0].id_mahasiswa
          getListRiwayatPendidikanMahasiswa(token, id_mahasiswa).then(response => {
            console.log(response.data)
            const data = response.data
            commit('SET_LIST_RIWAYAT_PENDIDIKAN_MAHASISWA', data)
            /* Message({
              message: 'Berhasil Update Riwayat Pendidikan Mahasiswa',
              type: 'success',
              duration: 5 * 1000
            }) */
            router.push('/mahasiswa/edit')
            resolve()
          }).catch(error => {
            console.log('error')
            reject(error)
          })
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeleteRiwayatPendidikanMahasiswa ({ commit }, data) {
      const token = store.getters.token
      return new Promise((resolve, reject) => {
        deleteRiwayatPendidikanMahasiswa(token, data.id_registrasi_mahasiswa).then(response => {
          console.log(response)
          resolve()
        })
      })
    }
  }
}

export default user
