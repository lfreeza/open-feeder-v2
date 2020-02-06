import { insertKurikulum } from '@/api/insertKurikulum'
import { getProdi } from '@/api/getProdi'
import store from '@/store'
// import { Message } from 'element-ui'

const insertkurikulum = {
  state: {
    kurikulum: null
  },

  mutations: {
    SET_KURIKULUM: (state, kurikulum) => {
      state.kurikulum = kurikulum
    },
    INSERT_KURIKULUM: (state) => {
      state.kurikulum = null
    }
  },

  actions: {
    SetKurikulum ({ commit, state }, data) {
      commit('SET_KURIKULUM', data)
      console.log('ini kurikulum', state.kurikulum)
    },
    InsertKurikulum ({ commit, state }) {
      commit('SET_LOADING', true)
      const token = store.getters.token
      const kurikulum = state.kurikulum
      console.log('insertkurikulum', kurikulum)
      kurikulum.forEach(function (data) {
        return new Promise((resolve, reject) => {
          const filter = `kode_program_studi LIKE '%${data.kode_program_studi}%' AND nama_program_studi LIKE '%${data.nama_program_studi}%' AND nama_jenjang_pendidikan LIKE '%${data.nama_jenjang_pendidikan}%'`
          getProdi(token, filter).then(response => {
            data.id_prodi = response.data[0].id_prodi
          }).then(() => {
            console.log(data)
            delete (data.kode_program_studi)
            delete (data.nama_program_studi)
            delete (data.nama_jenjang_pendidikan)

            insertKurikulum(token, data).then(response => {
              /* Message({
                message: 'Berhasil Input Kurikulum',
                type: 'success',
                duration: 5 * 1000
              }) */
              console.log(response.data)
              commit('INSERT_KURIKULUM')
              console.log('setelahinsert', state.kurikulum)
              commit('SET_LOADING', false)
              resolve()
            }).catch(error => {
              console.log('error')
              commit('SET_LOADING', false)
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

export default insertkurikulum
