import { insertBiodataMahasiswa } from '@/api/insertBiodataMahasiswa'
import store from '@/store'
// import { Message } from 'element-ui'
// import { Notification } from 'element-ui'

const insertbiodatamahasiswa = {
  state: {
    biodatamahasiswa: null
  },

  mutations: {
    SET_BIODATA_MAHASISWA: (state, biodatamahasiswa) => {
      state.biodatamahasiswa = biodatamahasiswa
    },
    INSERT_BIODATA_MAHASISWA: (state) => {
      state.biodatamahasiswa = null
    }
  },

  actions: {
    SetBiodataMahasiswa ({ commit, state }, data) {
      commit('SET_BIODATA_MAHASISWA', data)
      console.log('ini biodata', state.biodatamahasiswa)
    },
    InsertBiodataMahasiswa ({ commit, state }) {
      commit('SET_LOADING', true)
      const token = store.getters.token
      const biodata = state.biodatamahasiswa
      console.log('insertbiodata', biodata)
      biodata.forEach(function (data) {
        return new Promise((resolve, reject) => {
          insertBiodataMahasiswa(token, data).then(response => {
            /* Message({
              message: 'Berhasil Input Biodata Mahasiswa',
              type: 'success',
              duration: 5 * 1000
            }) */
            // Notification ({
            //   title: 'Success',
            //   message: 'Export Successfully',
            //   type: 'success',
            //   duration: 2000
            // })
            console.log(response.data)
            commit('INSERT_BIODATA_MAHASISWA')
            console.log('setelahinsert', state.biodatamahasiswa)
            commit('SET_LOADING', false)
            resolve()
          }).catch(error => {
            console.log('error')
            commit('SET_LOADING', false)
            reject(error)
          })
        })
      })
    }
  }
}

export default insertbiodatamahasiswa
