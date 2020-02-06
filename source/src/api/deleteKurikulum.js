/* eslint-disable camelcase */
import request from '@/utils/request'

export function deleteKurikulum (token, id_kurikulum) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'DeleteKurikulum',
      token,
      'key': {
        id_kurikulum
      }
    }
  })
}
