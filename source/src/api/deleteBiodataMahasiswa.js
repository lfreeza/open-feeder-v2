/* eslint-disable camelcase */
import request from '@/utils/request'

export function deleteBiodataMahasiswa (token, id_mahasiswa) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'DeleteBiodataMahasiswa',
      token,
      'key': {
        id_mahasiswa
      }
    }
  })
}
