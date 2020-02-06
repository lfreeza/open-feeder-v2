/* eslint-disable camelcase */
import request from '@/utils/request'

export function getPeriode (token) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetPeriode',
      token,
      'filter': '',
      'limit': '',
      'offset': 0
    }
  })
}
