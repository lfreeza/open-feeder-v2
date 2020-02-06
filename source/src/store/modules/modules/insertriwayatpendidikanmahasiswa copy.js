import { insertRiwayatPendidikanMahasiswa } from '@/api/insertRiwayatPendidikanMahasiswa'
import { getListMahasiswa } from '@/api/getListMahasiswa'
import { getProfilPT, getAllPT } from '@/api/getProfilPT'
import { getProdi, getAllProdi } from '@/api/getProdi'
import store from '@/store'
// import { Message } from 'element-ui'

const insertriwayatpendidikanmahasiswa = {
  state: {
    riwayatpendidikanmahasiswa: null
  },

  mutations: {
    SET_RIWAYAT_PENDIDIKAN_MAHASISWA: (state, riwayatpendidikanmahasiswa) => {
      state.riwayatpendidikanmahasiswa = riwayatpendidikanmahasiswa
    },
    INSERT_RIWAYAT_PENDIDIKAN_MAHASISWA: (state) => {
      state.riwayatpendidikanmahasiswa = null
    }
  },

  actions: {
    SetRiwayatPendidikanMahasiswa ({ commit, state }, data) {
      commit('SET_RIWAYAT_PENDIDIKAN_MAHASISWA', data)
      console.log('ini riwayat pendidikan mahasiswa', state.riwayatpendidikanmahasiswa)
    },
    InsertRiwayatPendidikanMahasiswa ({ commit, state }) {
      commit('SET_LOADING', true)
      const token = store.getters.token
      const riwayatpendidikanmahasiswa = state.riwayatpendidikanmahasiswa
      console.log('insertriwayatpendidikanmahasiswa', riwayatpendidikanmahasiswa)
      async function insertriwayatpendidikanmahasiswa (token, data) {
        try {
          let filter = `nama_mahasiswa LIKE '%${data.nama_mahasiswa}%' AND jenis_kelamin LIKE '%${data.jenis_kelamin}%' AND tanggal_lahir='${data.tanggal_lahir}'`
          let res = await getListMahasiswa(token, '', '', filter)
          data.id_mahasiswa = res.data[0].id_mahasiswa

          delete data.nama_mahasiswa
          delete data.jenis_kelamin
          delete data.tanggal_lahir

          filter = `kode_perguruan_tinggi LIKE '%${data.kode_perguruan_tinggi}%' AND nama_perguruan_tinggi LIKE '%${data.nama_perguruan_tinggi}%'`
          res = await getProfilPT(token, filter)
          data.id_perguruan_tinggi = res.data[0].id_perguruan_tinggi

          delete data.kode_perguruan_tinggi
          delete data.nama_perguruan_tinggi

          filter = `kode_program_studi LIKE '%${data.kode_program_studi}%' AND nama_program_studi LIKE '%${data.nama_program_studi}%' AND nama_jenjang_pendidikan LIKE '%${data.nama_jenjang_pendidikan}%'`
          res = await getProdi(token, filter)
          data.id_prodi = res.data[0].id_prodi

          delete (data.kode_program_studi)
          delete (data.nama_program_studi)
          delete (data.nama_jenjang_pendidikan)

          if (data.nama_perguruan_tinggi_asal) {
            filter = `nama_perguruan_tinggi LIKE '%${data.nama_perguruan_tinggi_asal}%'`
            res = await getAllPT(token, filter)
            data.id_perguruan_tinggi_asal = res.data[0].id_perguruan_tinggi

            if (data.nama_program_studi_asal) {
              filter = `id_perguruan_tinggi='${data.id_perguruan_tinggi_asal}' AND nama_program_studi='${data.nama_program_studi_asal}' AND nama_jenjang_pendidikan='${data.nama_jenjang_pendidikan_asal}'`
              res = await getAllProdi(token, filter)
              data.id_prodi_asal = res.data[0].id_prodi

              delete (data.nama_jenjang_pendidikan_asal)
              delete (data.nama_program_studi_asal)
            }
            delete (data.nama_perguruan_tinggi_asal)
          }
          res = await insertRiwayatPendidikanMahasiswa(token, data)
          /* Message({
            message: 'Berhasil Input Riwayat Pendidikan Mahasiswa',
            type: 'success',
            duration: 5 * 1000
          }) */
          console.log(res.data)
          commit('INSERT_RIWAYAT_PENDIDIKAN_MAHASISWA')
          commit('SET_LOADING', false)
        } catch (err) {
          commit('SET_LOADING', false)
          console.log(err)
        }
      }
      riwayatpendidikanmahasiswa.forEach(function (data) {
        insertriwayatpendidikanmahasiswa(token, data).then()
      })
    }
  }
}

export default insertriwayatpendidikanmahasiswa
