import Vue from 'vue'
import { getDetailAktivitasMahasiswa } from '@/api/getDetailAktivitasMahasiswa'
import { updateAktivitasMahasiswa } from '@/api/updateAktivitasMahasiswa'
import { deleteAktivitasMahasiswa } from '@/api/deleteAktivitasMahasiswa'
import { getListAktivitasMahasiswa } from '@/api/getListAktivitasMahasiswa'
// import { Message } from 'element-ui'
import router from '@/router'
import store from '@/store'

const user = {
  state: {
    updateaktivitas: null
  },

  mutations: {
    GET_DETAIL_AKTIVITAS_MAHASISWA: (state, updateaktivitas) => {
      Vue.set(state, 'updateaktivitas', updateaktivitas)
    }
  },

  actions: {
    GetDetailAktivitasMahasiswa ({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        getDetailAktivitasMahasiswa(token, id).then(response => {
          console.log(response.data)
          const data = response.data
          commit('GET_DETAIL_AKTIVITAS_MAHASISWA', data)
          console.log('aktivitas di store', store.getters.updateaktivitas)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeleteAktivitasMahasiswa ({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        deleteAktivitasMahasiswa(token, id).then(response => {
          console.log('aktivitas di store', store.getters.updateaktivitas)
          console.log('sekarang mau didelete')
          resolve()
        })
      })
    },
    UpdateAktivitasMahasiswa ({ commit }) {
      const token = store.getters.token
      const aktivitas = store.getters.updateaktivitas[0]
      return new Promise((resolve, reject) => {
        updateAktivitasMahasiswa(token, aktivitas).then(response => {
          console.log(response.data)
          console.log('aktivitas updatean di store', store.getters.updateaktivitas)
        }).then(() => {
          const listQuery = store.getters.listQueryAktivitasMahasiswa
          // console.log(listQuery)
          const limit = listQuery.limit
          const offset = listQuery.offset
          getListAktivitasMahasiswa(token, limit, offset).then(response => {
            console.log(response.data)
            const data = response.data
            commit('SET_LIST_AKTIVITAS_MAHASISWA', data)
            /* Message({
            //   message: 'Berhasil Update Aktivitas Mahasiswa',
            //   type: 'success',
            //   duration: 5 * 1000
            // }) */
            router.push('/aktivitas/listaktivitasmahasiswa')
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
