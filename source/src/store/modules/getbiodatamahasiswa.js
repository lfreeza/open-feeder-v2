import Vue from 'vue'
import { getBiodataMahasiswa } from '@/api/getBiodataMahasiswa'
import { updateBiodataMahasiswa } from '@/api/updateBiodataMahasiswa'
import { deleteBiodataMahasiswa } from '@/api/deleteBiodataMahasiswa'
import { getListMahasiswa } from '@/api/getListMahasiswa'
// import { Message } from 'element-ui'
import router from '@/router'
import store from '@/store'

const user = {
  state: {
    updatebiodatamahasiswa: null
  },

  mutations: {
    GET_BIODATA_MAHASISWA: (state, updatebiodatamahasiswa) => {
      Vue.set(state, 'updatebiodatamahasiswa', updatebiodatamahasiswa)
    }
  },

  actions: {
    GetBiodataMahasiswa ({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        getBiodataMahasiswa(token, id).then(response => {
          console.log(response.data)
          const data = response.data
          commit('GET_BIODATA_MAHASISWA', data)
          console.log('biodata di store', store.getters.updatebiodatamahasiswa)
          store.dispatch('GetListRiwayatPendidikanMahasiswaPrestasi', data[0].id_mahasiswa)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeleteBiodataMahasiswa ({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        deleteBiodataMahasiswa(token, id).then(response => {
          console.log('biodata di store', store.getters.updatebiodatamahasiswa)
          console.log('sekarang mau didelete')
          resolve()
        })
      })
    },
    UpdateBiodataMahasiswa ({ commit }) {
      const token = store.getters.token
      const biodata = store.getters.updatebiodatamahasiswa[0]
      return new Promise((resolve, reject) => {
        updateBiodataMahasiswa(token, biodata).then(response => {
          console.log(response.data)
          console.log('biodata updatean di store', store.getters.updatebiodatamahasiswa)
        }).then(() => {
          const listQuery = store.getters.listQueryMahasiswa
          const limit = listQuery.limit
          const offset = listQuery.offset
          getListMahasiswa(token, limit, offset).then(response => {
            console.log(response.data)
            const data = response.data
            commit('SET_LIST_MAHASISWA', data)
            /* Message({
            //   message: 'Berhasil Update Biodata Mahasiswa',
            //   type: 'success',
            //   duration: 5 * 1000
            // }) */
            router.push('/mahasiswa/data')
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
    }
  }
}

export default user
