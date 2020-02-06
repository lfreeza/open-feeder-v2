/* eslint-disable camelcase */
import request from '@/utils/request'

export function insertBiodataMahasiswa (token, record) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'InsertBiodataMahasiswa',
      token,
      record
    }
  })
}
