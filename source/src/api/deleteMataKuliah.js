/* eslint-disable camelcase */
import request from '@/utils/request'

export function deleteMataKuliah (token, id_matkul) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'DeleteMataKuliah',
      token,
      'key': {
        id_matkul
      }
    }
  })
}
