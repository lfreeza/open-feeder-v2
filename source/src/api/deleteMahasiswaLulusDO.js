/* eslint-disable camelcase */
import request from '@/utils/request'

export function deleteMahasiswaLulusDO (token, id_registrasi_mahasiswa) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'DeleteMahasiswaLulusDO',
      token,
      'key': {
        id_registrasi_mahasiswa
      }
    }
  })
}
