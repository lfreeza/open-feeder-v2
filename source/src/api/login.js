/* eslint-disable camelcase */
import request from '@/utils/request'

export function login (username, password) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetToken',
      username,
      password
    }
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
