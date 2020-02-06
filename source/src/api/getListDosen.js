/* eslint-disable camelcase */
import request from '@/utils/request'

export function getListDosen (token, limit, offset, filter) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetListDosen',
      token,
      filter,
      limit,
      offset
    }
  })
}
