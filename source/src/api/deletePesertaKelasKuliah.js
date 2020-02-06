/* eslint-disable camelcase */
import request from '@/utils/request'

export function deletePesertaKelasKuliah (token, id_kelas_kuliah, id_registrasi_mahasiswa) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'DeletePesertaKelasKuliah',
      token,
      'key': {
        id_kelas_kuliah,
        id_registrasi_mahasiswa
      }
    }
  })
}
