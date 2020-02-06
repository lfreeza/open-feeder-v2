/* eslint-disable camelcase */
import request from '@/utils/request'

export function getJalurMasuk (token, filter) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetJalurMasuk',
      token,
      filter,
      'limit': '',
      'offset': 0
    }
  })
}
