/* eslint-disable camelcase */
import request from '@/utils/request'

export function getDetailKurikulum (token, id_kurikulum) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetDetailKurikulum',
      token,
      'filter': `id_kurikulum = '${id_kurikulum}'`,
      'limit': 1,
      'offset': 0
    }
  })
}
