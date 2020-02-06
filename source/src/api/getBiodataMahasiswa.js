/* eslint-disable camelcase */
import request from '@/utils/request'

export function getBiodataMahasiswa (token, id_mahasiswa) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetBiodataMahasiswa',
      token,
      'filter': `id_mahasiswa = '${id_mahasiswa}'`,
      'limit': 1,
      'offset': 0
    }
  })
}
