import Vue from 'vue'
import { getDetailMataKuliah } from '@/api/getDetailMataKuliah'
import { updateMataKuliah } from '@/api/updateMataKuliah'
import { deleteMataKuliah } from '@/api/deleteMataKuliah'
import { getListMataKuliah } from '@/api/getListMataKuliah'
// import { Message } from 'element-ui'
import router from '@/router'
import store from '@/store'

const user = {
  state: {
    updatematakuliah: null
  },

  mutations: {
    GET_DETAIL_MATA_KULIAH: (state, updatematakuliah) => {
      Vue.set(state, 'updatematakuliah', updatematakuliah)
    },
    GET_LIST_MATA_KULIAH: (state, updatematakuliah) => {
      Vue.set(state, 'updatematakuliah', updatematakuliah)
    }
  },

  actions: {
    GetDetailMataKuliah ({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        getDetailMataKuliah(token, id).then(response => {
          console.log(response.data)
          const data = response.data
          commit('GET_DETAIL_MATA_KULIAH', data)
          console.log('matakuliah di store', store.getters.updatematakuliah)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeleteMataKuliah ({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        deleteMataKuliah(token, id).then(response => {
          console.log('matakuliah di store', store.getters.updatematakuliah)
          console.log('sekarang mau didelete')
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    UpdateMataKuliah ({ commit }) {
      const token = store.getters.token
      const matakuliah = store.getters.updatematakuliah[0]
      return new Promise((resolve, reject) => {
        updateMataKuliah(token, matakuliah).then(response => {
          console.log(response.data)
          console.log('matakuliah updatean di store', store.getters.updatematakuliah)
        }).then(() => {
          const listQuery = store.getters.listQueryMataKuliah
          // console.log(listQuery)
          const limit = listQuery.limit
          const offset = listQuery.offset
          getListMataKuliah(token, limit, offset).then(response => {
            console.log(response.data)
            const data = response.data
            commit('SET_LIST_MATA_KULIAH', data)
            /* Message({
            //   message: 'Berhasil Update Mata Kuliah',
            //   type: 'success',
            //   duration: 5 * 1000
            // }) */
            router.push('/matakuliah/listmatakuliah')
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
