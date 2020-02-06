import Vue from 'vue'
import { getDetailMahasiswaLulusDO } from '@/api/getDetailMahasiswaLulusDO'
import { updateMahasiswaLulusDO } from '@/api/updateMahasiswaLulusDO'
import { deleteMahasiswaLulusDO } from '@/api/deleteMahasiswaLulusDO'
import { getListMahasiswaLulusDO } from '@/api/getListMahasiswaLulusDO'
// import { Message } from 'element-ui'
import router from '@/router'
import store from '@/store'

const user = {
  state: {
    updatelulusdo: null
  },

  mutations: {
    GET_DETAIL_MAHASISWA_LULUS_DO: (state, updatelulusdo) => {
      Vue.set(state, 'updatelulusdo', updatelulusdo)
    }
  },

  actions: {
    GetDetailMahasiswaLulusDO ({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        getDetailMahasiswaLulusDO(token, id).then(response => {
          console.log(response.data)
          const data = response.data
          commit('GET_DETAIL_MAHASISWA_LULUS_DO', data)
          console.log('lulusdo di store', store.getters.updatelulusdo)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeleteMahasiswaLulusDO ({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        deleteMahasiswaLulusDO(token, id).then(response => {
          console.log('lulusdo di store', store.getters.updatelulusdo)
          console.log('sekarang mau didelete')
          resolve()
        })
      })
    },
    UpdateMahasiswaLulusDO ({ commit }) {
      const token = store.getters.token
      const lulusdo = store.getters.updatelulusdo[0]
      return new Promise((resolve, reject) => {
        updateMahasiswaLulusDO(token, lulusdo).then(response => {
          console.log(response.data)
          console.log('lulusdo updatean di store', store.getters.updatelulusdo)
        }).then(() => {
          const listQuery = store.getters.listQueryMahasiswaLulusDO
          // console.log(listQuery)
          const limit = listQuery.limit
          const offset = listQuery.offset
          getListMahasiswaLulusDO(token, limit, offset).then(response => {
            console.log(response.data)
            const data = response.data
            commit('SET_LIST_MAHASISWA_LULUS_DO', data)
            /* Message({
              message: 'Berhasil Update Mahasiswa Lulus DO',
              type: 'success',
              duration: 5 * 1000
            }) */
            router.push('/lulusdo/listlulusdo')
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
