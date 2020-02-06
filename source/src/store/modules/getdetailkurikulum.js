import Vue from 'vue'
import { getDetailKurikulum } from '@/api/getDetailKurikulum'
import { updateKurikulum } from '@/api/updateKurikulum'
import { deleteKurikulum } from '@/api/deleteKurikulum'
import { getListKurikulum } from '@/api/getListKurikulum'
// import { Message } from 'element-ui'
import router from '@/router'
import store from '@/store'

const user = {
  state: {
    updatekurikulum: null
  },

  mutations: {
    GET_DETAIL_KURIKULUM: (state, updatekurikulum) => {
      Vue.set(state, 'updatekurikulum', updatekurikulum)
    }
  },

  actions: {
    GetDetailKurikulum ({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        getDetailKurikulum(token, id).then(response => {
          console.log(response.data)
          const data = response.data
          commit('GET_DETAIL_KURIKULUM', data)
          console.log('detail kurikulum di store', store.getters.updatekurikulum)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeleteKurikulum ({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        deleteKurikulum(token, id).then(response => {
          console.log('kurikulum di store', store.getters.updatekurikulum)
          console.log('sekarang mau didelete')
          resolve()
        })
      })
    },
    UpdateKurikulum ({ commit }) {
      const token = store.getters.token
      const kurikulum = store.getters.updatekurikulum[0]
      return new Promise((resolve, reject) => {
        updateKurikulum(token, kurikulum).then(response => {
          console.log(response.data)
          console.log('kurikulum updatean di store', store.getters.updatekurikulum)
        }).then(() => {
          const listQuery = store.getters.listQueryKurikulum
          // console.log(listQuery)
          const limit = listQuery.limit
          const offset = listQuery.offset
          getListKurikulum(token, limit, offset).then(response => {
            console.log(response.data)
            const data = response.data
            commit('SET_LIST_KURIKULUM', data)
            /* Message({
              message: 'Berhasil Update Mata Kuliah',
              type: 'success',
              duration: 5 * 1000
            }) */
            router.push('/kurikulum/listkurikulum')
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
