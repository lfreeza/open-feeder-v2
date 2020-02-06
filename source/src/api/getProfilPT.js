/* eslint-disable camelcase */
import request from '@/utils/request'

export function getProfilPT (token, filter) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetProfilPT',
      token,
      filter,
      'limit': 1,
      'offset': 0
    }
  })
}
export function getAllPT (token, filter) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetAllPT',
      token,
      filter,
      'limit': '',
      'offset': 0
    }
  })
}
