/* eslint-disable camelcase */
import request from '@/utils/request'

export function getProdi (token, filter) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetProdi',
      token,
      filter,
      'limit': '',
      'offset': 0
    }
  })
}
export function getAllProdi (token, filter) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetAllProdi',
      token,
      filter,
      'limit': '',
      'offset': 0
    }
  })
}
