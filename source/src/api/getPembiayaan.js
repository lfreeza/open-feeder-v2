/* eslint-disable camelcase */
import request from '@/utils/request'

export function getPembiayaan (token, filter) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetPembiayaan',
      token,
      filter,
      'limit': '',
      'offset': 0
    }
  })
}
