import { insertRiwayatPendidikanMahasiswa } from '@/api/insertRiwayatPendidikanMahasiswa'
import { insertBiodataMahasiswa } from '@/api/insertBiodataMahasiswa'
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
          const biodata = {
            nama_mahasiswa: data.nama_mahasiswa,
            jenis_kelamin: data.jenis_kelamin,
            jalan: data.jalan,
            rt: data.rt,
            rw: data.rw,
            kelurahan: data.kelurahan,
            kode_pos: data.kode_pos,
            nisn: data.nisn,
            nik: data.nik,
            tempat_lahir: data.tempat_lahir,
            tanggal_lahir: data.tanggal_lahir,
            nama_ayah: data.nama_ayah,
            tanggal_lahir_ayah: data.tanggal_lahir_ayah,
            id_pendidikan_ayah: data.id_pendidikan_ayah,
            id_pekerjaan_ayah: data.id_pekerjaan_ayah,
            id_penghasilan_ayah: data.id_penghasilan_ayah,
            id_kebutuhan_khusus_ayah: data.id_kebutuhan_khusus_ayah,
            nama_ibu_kandung: data.nama_ibu_kandung,
            tanggal_lahir_ibu: data.tanggal_lahir_ibu,
            id_pendidikan_ibu: data.id_pendidikan_ibu,
            id_pekerjaan_ibu: data.id_pekerjaan_ibu,
            id_penghasilan_ibu: data.id_penghasilan_ibu,
            id_kebutuhan_khusus_ibu: data.id_kebutuhan_khusus_ibu,
            nama_wali: data.nama_wali,
            tanggal_lahir_wali: data.tanggal_lahir_wali,
            id_pendidikan_wali: data.id_pendidikan_wali,
            id_pekerjaan_wali: data.id_pekerjaan_wali,
            id_penghasilan_wali: data.id_penghasilan_wali,
            id_kebutuhan_khusus_mahasiswa: data.id_kebutuhan_khusus_mahasiswa,
            telepon: data.telepon,
            handphone: data.handphone,
            email: data.email,
            penerima_kps: data.penerima_kps,
            id_wilayah: data.id_wilayah,
            id_agama: data.id_agama,
            kewarganegaraan: data.kewarganegaraan
          }
          let res = await insertBiodataMahasiswa(token, biodata)
          data.id_mahasiswa = res.data.id_mahasiswa

          delete data.nama_mahasiswa
          delete data.jenis_kelamin
          delete data.jalan
          delete data.rt
          delete data.rw
          delete data.kelurahan
          delete data.kode_pos
          delete data.nisn
          delete data.nik
          delete data.tempat_lahir
          delete data.tanggal_lahir
          delete data.nama_ayah
          delete data.tanggal_lahir_ayah
          delete data.id_pendidikan_ayah
          delete data.id_pekerjaan_ayah
          delete data.id_penghasilan_ayah
          delete data.id_kebutuhan_khusus_ayah
          delete data.nama_ibu_kandung
          delete data.tanggal_lahir_ibu
          delete data.id_pendidikan_ibu
          delete data.id_pekerjaan_ibu
          delete data.id_penghasilan_ibu
          delete data.id_kebutuhan_khusus_ibu
          delete data.nama_wali
          delete data.tanggal_lahir_wali
          delete data.id_pendidikan_wali
          delete data.id_pekerjaan_wali
          delete data.id_penghasilan_wali
          delete data.id_kebutuhan_khusus_mahasiswa
          delete data.telepon
          delete data.handphone
          delete data.email
          delete data.penerima_kps
          delete data.id_wilayah
          delete data.id_agama
          delete data.kewarganegaraan

          let filter = `kode_perguruan_tinggi LIKE '%${data.kode_perguruan_tinggi}%' AND nama_perguruan_tinggi LIKE '%${data.nama_perguruan_tinggi}%'`
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

              // delete (data.nama_jenjang_pendidikan_asal)
              // delete (data.nama_program_studi_asal)
            }
            // delete (data.nama_perguruan_tinggi_asal)
          }

          delete (data.nama_jenjang_pendidikan_asal)
          delete (data.nama_program_studi_asal)
          delete (data.nama_perguruan_tinggi_asal)

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
      async function insertriwayatbiodata (token, data) {
        for (const record of data) {
          await insertriwayatpendidikanmahasiswa(token, record)
        }
      }
      insertriwayatbiodata(token, riwayatpendidikanmahasiswa)
    }
  }
}

export default insertriwayatpendidikanmahasiswa
