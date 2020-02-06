/* eslint-disable camelcase */
import request from '@/utils/request'

export function deletePrestasiMahasiswa (token, id_prestasi) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'DeletePrestasiMahasiswa',
      token,
      'key': {
        id_prestasi
      }
    }
  })
}
