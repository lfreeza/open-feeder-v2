/* eslint-disable camelcase */
import request from '@/utils/request'

export function deleteRiwayatPendidikanMahasiswa (token, id_registrasi_mahasiswa) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'DeleteRiwayatPendidikanMahasiswa',
      token,
      'key': {
        id_registrasi_mahasiswa
      }
    }
  })
}
