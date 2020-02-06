/* eslint-disable camelcase */
import request from '@/utils/request'

export function deleteKelasKuliah (token, id_kelas_kuliah) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'DeleteKelasKuliah',
      token,
      'key': {
        id_kelas_kuliah
      }
    }
  })
}
