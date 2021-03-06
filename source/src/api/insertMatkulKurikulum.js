/* eslint-disable camelcase */
import request from '@/utils/request'

export function insertMatkulKurikulum (token, record) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'InsertMatkulKurikulum',
      token,
      record
    }
  })
}
