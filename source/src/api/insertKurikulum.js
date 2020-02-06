/* eslint-disable camelcase */
import request from '@/utils/request'

export function insertKurikulum (token, record) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'InsertKurikulum',
      token,
      record
    }
  })
}
