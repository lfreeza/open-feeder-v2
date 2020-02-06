/* eslint-disable camelcase */
import request from '@/utils/request'

export function deleteMatkulKurikulum (token, id_kurikulum, id_matkul) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'DeleteMatkulKurikulum',
      token,
      'key': {
        id_kurikulum,
        id_matkul
      }
    }
  })
}
