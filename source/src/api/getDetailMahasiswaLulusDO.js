/* eslint-disable camelcase */
/* eslint-disable camelcase */
import request from '@/utils/request'

export function getDetailMahasiswaLulusDO (token, id_registrasi_mahasiswa) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetDetailMahasiswaLulusDO',
      token,
      'filter': `id_registrasi_mahasiswa = '${id_registrasi_mahasiswa}'`,
      'limit': 1,
      'offset': 0
    }
  })
}
