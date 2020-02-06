/* eslint-disable camelcase */
import request from '@/utils/request'

export function insertMahasiswaLulusDO (token, record) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'InsertMahasiswaLulusDO',
      token,
      record
    }
  })
}
