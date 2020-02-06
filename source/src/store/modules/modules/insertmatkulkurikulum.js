import { insertMatkulKurikulum } from '@/api/insertMatkulKurikulum'
import { getListKurikulum } from '@/api/getListKurikulum'
import { getListMataKuliah } from '@/api/getListMataKuliah'
import store from '@/store'
// import { Message } from 'element-ui'

const insertmatkulkurikulum = {
  state: {
    matkulkurikulum: null
  },

  mutations: {
    SET_MATKUL_KURIKULUM: (state, matkulkurikulum) => {
      state.matkulkurikulum = matkulkurikulum
    },
    INSERT_MATKUL_KURIKULUM: (state) => {
      state.matkulkurikulum = null
    }
  },

  actions: {
    SetMatkulKurikulum ({ commit, state }, data) {
      commit('SET_MATKUL_KURIKULUM', data)
      console.log('ini matkulkurikulum', state.matkulkurikulum)
    },
    InsertMatkulKurikulum ({ commit, state }) {
      commit('SET_LOADING', true)
      const token = store.getters.token
      const matkulkurikulum = state.matkulkurikulum
      console.log('insertmatkulkurikulum', matkulkurikulum)
      async function insertmatkulkurikulum (token, data) {
        try {
          let filter = `nama_kurikulum LIKE '%${data.nama_kurikulum}%' AND nama_program_studi LIKE '%${data.nama_program_studi}%' AND id_semester LIKE '%${data.id_semester}%'`
          let res = await getListKurikulum(token, '', '', filter)
          data.id_kurikulum = res.data[0].id_kurikulum

          delete data.nama_kurikulum
          delete data.nama_program_studi
          delete data.id_semester

          filter = `kode_mata_kuliah LIKE '%${data.kode_mata_kuliah}%' AND nama_mata_kuliah LIKE '%${data.nama_mata_kuliah}%' AND id_jenis_mata_kuliah LIKE '%${data.id_jenis_mata_kuliah}%'`
          res = await getListMataKuliah(token, '', '', filter)
          data.id_matkul = res.data[0].id_matkul

          delete (data.kode_mata_kuliah)
          delete (data.nama_mata_kuliah)
          delete (data.id_jenis_mata_kuliah)

          res = await insertMatkulKurikulum(token, data)
          /* Message({
            message: 'Berhasil Input Matkul Kurikulum',
            type: 'success',
            duration: 5 * 1000
          }) */
          console.log(res.data)
          commit('SET_LOADING', false)
          commit('INSERT_MATKUL_KURIKULUM')
        } catch (err) {
          commit('SET_LOADING', false)
          console.log(err)
        }
      }
      matkulkurikulum.forEach(function (data) {
        insertmatkulkurikulum(token, data).then()
      })
    }
  }
}

export default insertmatkulkurikulum
